/**
 * Clean files.
 * @function _clean
 */

"use strict";

var u = require('apeman-util'),
    async = u.ext.async,
    file = u.file;

/** @lends _clean */
function _clean(settings, callback) {
    async.series([
        function (callback) {
            var prerenderCacheDir = settings.prerenderCacheDir;
            file.rmdirRecursive(prerenderCacheDir, callback);
        }
    ], callback);
}


module.exports = _clean;