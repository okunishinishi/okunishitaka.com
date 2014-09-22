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

module.exports = h;