/**
 * @file Convenience functions for app bin.
 * @private
 */

"use strict";

var u = require('apeman-util'),
    file = u.file,
    web = require('apeman-web'),
    clustering = u.clustering,
    path = u.core.path;

var basedir = path.resolve(__dirname, '..'),
    h = new clustering.ClusterHelper(basedir);

h.async = u.ext.async;
h.path = path;
h.web = web;
h.rmdirRecursive = file.rmdirRecursive;



module.exports = h;