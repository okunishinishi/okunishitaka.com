/**
 * Detect should show prerendered page or not.
 * @param {HTTPRequest} req - Reqest to detect.
 * @function _shouldShowPrerenderedPage
 * @private
 */
var u = require('apeman-util'),
    _queryInUrl = require('./_query_in_url');


/** @lends _shouldShowPrerenderedPage */
exports = module.exports = function _shouldShowPrerenderedPage(req) {
    var d = exports._detectors;
    if (!d.isGet(req.method)) {
        return false;
    }
    if (d.shouldIgnore(req.url)) {
        return false;
    }

    if (d.isBufferAgent(req.headers)) {
        return true;
    }

    if (d.isCrawler(req.headers)) {
        return true;
    }

    var query = _queryInUrl(req.url);
    if (d.isExcapedFragment(query)) {
        return true;
    }

    return false;
}

exports._detectors = {
    extensionsToIgnore: [
        '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar', '.exe', '.wmv', '.doc', '.avi', '.ppt', '.mpg', '.mpeg', '.tif', '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf', '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent'
    ],
    crawlerUserAgents: [
        'googlebot',
        'yahoo',
        'bingbot',
        'baiduspider',
        'facebookexternalhit',
        'twitterbot',
        'rogerbot',
        'linkedinbot',
        'embedly',
        'quora link preview',
        'showyoubot',
        'outbrain',
        'pinterest',
        'developers.google.com/+/web/snippet'
    ],
    isGet: function isGet(method) {
        return method.trim().toUpperCase() == 'GET';
    },
    shouldIgnore: function shouldIgnore(url) {
        var extensionsToIgnore = exports._detectors.extensionsToIgnore;
        return extensionsToIgnore.some(function (ext) {
            return url.indexOf(ext) !== -1;
        });
    },
    isBufferAgent: function isBufferAgent(headers) {
        return !!headers['x-bufferbot'];
    },
    isCrawler: function isCrawler(headers) {
        var userAgent = headers['user-agent'];
        var crawlerUserAgents = exports._detectors.crawlerUserAgents;
        return crawlerUserAgents.some(function (crawlerUserAgent) {
            return userAgent.toLowerCase().indexOf(crawlerUserAgent.toLowerCase()) !== -1;
        });
    },
    isExcapedFragment: function isExcapedFragment(query) {
        return query.hasOwnProperty('_escaped_fragment_');
    }
}

