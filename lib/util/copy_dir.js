/**
 * @function copyDir
 * @param {string} src - Source directory to copy.
 * @param {string} dest - Dest directory to copy.
 * @param {function} callback - Callback when done.
 */

"use strict";

var u = require('apeman-util'),
    file = u.file,
    path = u.core.path,
    fs = u.core.fs,
    mkdirp = u.ext.mkdirp,
    async = u.ext.async,
    glob = u.ext.glob;


/** @lends copyDir */
function copyDir(srcDir, destDir, callback) {
    async.waterfall([
        function (callback) {
            glob(path.join(srcDir, '**', '*.*'), callback);
        },
        function (src) {
            async.eachSeries(src, function (src, callbakc) {
                var filename = path.relative(srcDir, src),
                    dest = path.resolve(destDir, filename);
                async.waterfall([
                    function (callback) {
                        fs.stat(src, callback);
                    },
                    function (stats, callback) {
                        var isDir = stats.isDirectory();
                        if (isDir) {
                            mkdirp(dest, callback);
                        } else {
                            copyDir._copyFile(src, dest, callback);
                        }
                    }
                ], callback);
            }, callback);
        }
    ], callback);
}

copyDir._copyFile = function (src, dest, callback) {
    async.series([
        function (callback) {
            mkdirp(path.dirname(dest), callback);
        },
        function (callback) {
            file.copyFile(src, dest, callback);
        }
    ], callback);
}


module.exports = copyDir;