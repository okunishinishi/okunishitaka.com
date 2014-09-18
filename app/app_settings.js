/**
 * App settings.
 */

"use strict";

var h = require('./_helper'),
    path = h.path,
    basedir = h.basedir;

/**
 * Base directory path.
 */
exports.basedir = basedir;

/**
 * Public directory path.
 */
exports.publicDir = path.resolve(basedir, 'public');

/**
 * Data directory path.
 */
exports.dataDir = path.resolve(basedir, 'var/data');

/**
 * Cache directory path.
 */
exports.cacheDir = path.resolve(basedir, 'var/cache');

/**
 * Prerender cache directory path.
 */
exports.prerenderCacheDir = path.resolve(exports.cacheDir, 'prerender');

/**
 * Access log file path.
 */
exports.accessLogFile = path.resolve(basedir, 'var/log/okunishitaka.com-access.log');

/**
 * Error log file path.
 */
exports.errorLogFile = path.resolve(basedir, 'var/log/okunishitaka.com-error.log');