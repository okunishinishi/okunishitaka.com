/**
 * Middleware to pre render.
 * @memberof module:okunishitaka-dot-com/app/middlewares
 * @function prerenderMiddleware
 * @param {object} options - Optional settings.
 * @param {object} options.baseUrl - Base url.
 * @param {string} options.cacheDirectory - Cache directory path.
 * @param {number} [options.cacheDuration=100 * 60 * 60 * 24] - Cache duration.
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
    takeHtmlSnapshot = u.browsing.takeHtmlSnapshot;

/** @lends prerenderMiddleware */
function prerenderMiddleware(options) {
    var o = fallbackCopy(prerenderMiddleware._defaultOptions, options || {});
    return function prerender(req, res, next) {
        var shouldShowPrerendered = prerenderMiddleware._shouldShowPrerenderedPage(req);
        if (!shouldShowPrerendered) {
            next();
            return;
        }
        prerenderMiddleware.prerender(
            url.resolve(o.baseUrl, req.url),
            o.cacheDirectory,
            o.cacheDuration,
            function (err, prerendered) {
                if (err) {
                    console.error(err);
                    next(); //Do nothing if faild.
                    return;
                }
                console.log('prerender page with url:', req.url);
                console.log(' cached saved:', prerendered);
                fs.createReadStream(prerendered).pipe(res);
            }
        )
        ;
    }
}

prerenderMiddleware._defaultOptions = {
    cacheDirectory: 'var/cache/prerender',
    cacheDuration: 100 * 60 * 60 * 24
}

prerenderMiddleware.restoreURL = function (urlString) {
    var data = url.parse(urlString),
        query = qs.parse(data.query),
        fragment = query['_escaped_fragment_'] || '';
    delete query['_escaped_fragment_'];
    var querySring = qs.stringify(query);
    var href = data.href.replace(data.search, '').replace(/\/$/, '');
    if (fragment) {
        href = [href, fragment.replace(/^\/*/, '')].join('/');
    }
    if (querySring) {
        href = [href, querySring].join('?');
    }
    return  href;
};

prerenderMiddleware.prerender = function (incomingURL, cacheDirectory, cacheDuration, callback) {
    var restoredURL = prerenderMiddleware.restoreURL(incomingURL),
        filename = path.join(cacheDirectory, prerenderMiddleware._filenameForUrl(restoredURL));
    prerenderMiddleware._isValidCache(filename, cacheDuration, function (cached) {
        if (cached) {
            callback(null, filename);
            return;
        }

        async.series([
            function (callback) {
                mkdirp(path.dirname(filename), callback);
            },
            function (callback) {
                takeHtmlSnapshot(restoredURL, filename, callback);
            }
        ], function (err) {
            callback(err, filename);
        });
    });
}

prerenderMiddleware._filenameForUrl = function (url) {
    return url.replace(/[\/]/g, "_");
}

prerenderMiddleware._isValidCache = function (filename, maxHoldDuration, callback) {
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(false);
            return;
        }
        prerenderMiddleware._timeFromLastModify(filename, function (err, passed) {
            if (err) {
                callback(false);
                return;
            }
            callback(passed < maxHoldDuration);
        })
    });
}

prerenderMiddleware._timeFromLastModify = function (filename, callback) {
    async.waterfall([
        function (callback) {
            fs.stat(filename, callback);
        },
        function (stats, callback) {
            var time = new Date() - new Date(stats.mtime);
            callback(null, time);
        }
    ], callback);
}

prerenderMiddleware._shouldShowPrerenderedPage = _shouldShowPrerenderedPage;
module.exports = prerenderMiddleware;
