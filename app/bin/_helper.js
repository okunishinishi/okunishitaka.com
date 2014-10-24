/**
 * @file Convenience functions for app bin.
 * @module okunishitaka-dot-com/app/bin/_helper
 * @private
 */

"use strict";

var u = require('apeman-util'),
    clustering = u.clustering,
    basedir = require('../app_settings').basedir,
    h = new clustering.ClusterHelper(basedir);

h.async = u.ext.async;
h.file = u.file;
h.persist = clustering.persist;

module.exports = h;