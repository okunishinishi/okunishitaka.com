/**
 * @file Convenience functions for app bin.
 * @private
 */

"use strict";

var u = require('apeman-util'),
    clustering = u.clustering,
    basedir = require('../app_settings').basedir,
    h = new clustering.ClusterHelper(basedir);

h.async = u.ext.async;
h.file = u.file;
h.done = function (msg) {
    return function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(msg);
        }
        process.exit(err ? 1 : 0);
    }
}
module.exports = h;