/**
 * Middleware to pre render.
 * @function prerenderMiddleware
 * @param {object} options - Optional settings.
 * @param {string} options.cacheDirectory - Cache directory path.
 * @param {string} [options.protocol='http'] - Protocol to forwerd to.
 * @param {string} [options.protocol='http'] - Protocol to forwerd to.
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    url = u.core.url,
    fs = u.core.fs,
    qs = u.ext.qs,
    mkdirp = u.ext.mkdirp,
    async = u.ext.async,
    uuid = u.ext.uuid,
    path = u.core.path,
    fallbackCopy = u.object.fallbackCopy,
    _shouldShowPrerenderedPage = require('./_should_show_prerendered_page'),
    execPhantomScript = require('../../lib/util/exec_phantom_script');

/** @lends prerenderMiddleware */
function prerenderMiddleware(options) {
    var o = fallbackCopy(prerenderMiddleware._defaultOptions, options || {});
    return function prerender(req, res, next) {
        var shouldShowPrerendered = prerenderMiddleware._shouldShowPrerenderedPage(req);
        if (!shouldShowPrerendered) {
            next();
            return;
        }
        prerenderMiddleware.prerender(req.url, o.cacheDirectory, function (err, prerendered) {
            if (err) {
                console.error(err);
                next(); //Do nothing if faild.
                return;
            }
            console.log('prerender page with url:', req.url);
            console.log(' cached saved:', prerendered);
            fs.createReadStream(prerendered).pipe(res);
        });
    }
}

prerenderMiddleware._defaultOptions = {
    cacheDirectory: 'var/cache/prerender'
}

prerenderMiddleware.restoreURL = function (urlString) {
    var data = url.parse(urlString),
        query = qs.parse(data.query),
        fragment = query['_escaped_fragment_'] || '';
    delete query['_escaped_fragment_'];
    var querySring = qs.stringify(query);
    var href = data.href.replace(data.search, '');
    if (fragment) {
        href = [href, fragment].join('/');
    }
    if (querySring) {
        href = [href, querySring].join('?');
    }
    return  href.replace(/\/{2,}/g, '/');
};

prerenderMiddleware.prerender = function (incomingURL, cacheDirectory, callback) {
    var restoredURL = prerenderMiddleware.restoreURL(incomingURL),
        filename = path.join(cacheDirectory, prerenderMiddleware._filenameForUrl(restoredURL)),
        bin = require.resolve('./bin/prerender.phantom.js');
    restoredURL = 'http://localhost:3801' + restoredURL; //FIXME
    async.series([
        function (callback) {
            mkdirp(path.dirname(filename), callback);
        },
        function (callback) {
            execPhantomScript(bin, [
                restoredURL,
                filename
            ], callback);
        }
    ], function (err) {
        callback(err, filename);
    });


}

prerenderMiddleware._filenameForUrl = function (url) {
    return url.replace(/[\/]/g, "_");
}


prerenderMiddleware._shouldShowPrerenderedPage = _shouldShowPrerenderedPage;
module.exports = prerenderMiddleware;
