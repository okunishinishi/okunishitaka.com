/**
 * Clean files.
 * @function _clean
 */

"use strict";

var h = require('./_helper');

/** @lends _clean */
function _clean(settings, callback) {
    h.async.series([
        function (callback) {
            var prerenderCacheDir = settings.prerenderCacheDir;
            h.rmdirRecursive(prerenderCacheDir, callback);
        }
    ], callback);
}


module.exports = _clean;