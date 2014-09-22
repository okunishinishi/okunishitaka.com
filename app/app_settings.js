/**
 * App settings.
 */

"use strict";

var u = require('apeman-util'),
    path = u.core.path;

/**
 * Base directory path.
 */
exports.basedir = path.resolve(__dirname, '..');

/**
 * Public directory path.
 */
exports.publicDir = path.resolve(exports.basedir, 'public');

/**
 * Data directory path.
 */
exports.dataDir = path.resolve(exports.basedir, 'var/data');

/**
 * Cache directory path.
 */
exports.cacheDir = path.resolve(exports.basedir, 'var/cache');

/**
 * Prerender cache directory path.
 */
exports.prerenderCacheDir = path.resolve(exports.cacheDir, 'prerender');

/**
 * Access log file path.
 */
exports.accessLogFile = path.resolve(exports.basedir, 'var/log/okunishitaka.com-access.log');

/**
 * Error log file path.
 */
exports.errorLogFile = path.resolve(exports.basedir, 'var/log/okunishitaka.com-error.log');