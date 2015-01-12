/**
 * Helper functions for bin files.
 */

"use strict";

var u = require('apeman-util'),
    childProcess = u.core.childProcess,
    path = u.core.path;

var h = {};
h.basedir = path.resolve(__dirname, '..');
h.spawn = function (bin, args) {
    bin = path.resolve(h.basedir, bin);
    var spawned = childProcess.spawn(bin, args);
    spawned.stdout.pipe(process.stdout);
    spawned.stderr.pipe(process.stderr);
    return spawned;
};


module.exports = h;