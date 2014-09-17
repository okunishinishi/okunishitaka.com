/**
 * Middleware to pre render.
 * @function prerenderMiddleware
 * @param {object} [options] - Optional settings.
 */

"use strict";

var u = require('apeman-util'),
    copy = u.object.copy,
    url = u.core.url,
    qs = u.ext.qs,
    uuid = u.ext.uuid,
    path = u.core.path,
    fallbackCopy = u.object.fallbackCopy,
    _shouldShowPrerenderedPage = require('./_should_show_prerendered_page'),
    execPhantomScript = require('../../lib/util/exec_phantom_script');

/** @lends prerenderMiddleware */
function prerenderMiddleware(options) {
    var o = fallbackCopy(prerenderMiddleware._defaultOptions, options || {});
    return function prerender(req, res, next) {
        var shouldShowPrerendered = prerenderMiddleware._shouldShowPrerendered(req);
        if (!shouldShowPrerendered) {
            next();
            return;
        }
        prerenderMiddleware.prerender(req.url, o.cacheDirectory, function (err, page) {
            if (err) {
                next(); //Do nothing if faild.
                return;
            }
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
        href = [href, fragment].join('#!');
    }
    if (querySring) {
        href = [href, querySring].join('?');
    }
    return  href;
};

prerenderMiddleware.prerender = function (incomingURL, cacheDirectory, callback) {
    var restoredURL = prerenderMiddleware.restoreURL(incomingURL),
        filename = path.join(cacheDirectory, prerenderMiddleware._filenameForUrl(restoredURL)),
        bin = require.resolve('./bin/prerender.phantom.js');
    execPhantomScript(bin, [
        restoredURL,
        filename
    ], callback);

}

prerenderMiddleware._filenameForUrl = function (url) {
    return url.replace(/\.\//g, '-');
}


prerenderMiddleware._shouldShowPrerenderedPage = _shouldShowPrerenderedPage;
module.exports = prerenderMiddleware;
