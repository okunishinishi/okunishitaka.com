/**
 * App settings.
 * @module okunishitaka-dot-com/app/appSettings
 */

"use strict";

var u = require('apeman-util'),
    path = u.core.path;

/** @lends module:okunishitaka-dot-com/app/appSettings */
exports = module.exports;

/**
 * Base directory path.
 * @type {string}
 */
exports.basedir = path.resolve(__dirname, '..');

/**
 * Public directory path.
 * @type {string}
 */
exports.publicDir = path.resolve(exports.basedir, 'public');

/**
 * Data directory path.
 * @type {string}
 */
exports.dataDir = path.resolve(exports.basedir, 'var/data');

/**
 * Cache directory path.
 * @type {string}
 *
 */
exports.cacheDir = path.resolve(exports.basedir, 'var/cache');

/**
 * Prerender cache directory path.
 * @type {string}
 */
exports.prerenderCacheDir = path.resolve(exports.cacheDir, 'prerender');

/**
 * Access log file path.
 * @type {string}
 */
exports.accessLogFile = path.resolve(exports.basedir, 'var/log/okunishitaka.com-access.log');

/**
 * Error log file path.
 * @type {string}
 */
exports.errorLogFile = path.resolve(exports.basedir, 'var/log/okunishitaka.com-error.log');

/**
 * Supported langs.
 * @type {string[]}
 */
exports.supportedLangs = ['ja', 'en'];