/**
 * App settings.
 * @memberof okunishitaka.com/app
 * @member appSettings
 * @type {object}
 */

"use strict";

var u = require('apeman-util'),
    path = u.core.path;

/** @lends appSettings */
var appSettings = {};

/**
 * Base directory path.
 */
appSettings.basedir = path.resolve(__dirname, '..');

/**
 * Public directory path.
 */
appSettings.publicDir = path.resolve(appSettings.basedir, 'public');

/**
 * Data directory path.
 */
appSettings.dataDir = path.resolve(appSettings.basedir, 'var/data');

/**
 * Cache directory path.
 */
appSettings.cacheDir = path.resolve(appSettings.basedir, 'var/cache');

/**
 * Prerender cache directory path.
 */
appSettings.prerenderCacheDir = path.resolve(appSettings.cacheDir, 'prerender');

/**
 * Access log file path.
 */
appSettings.accessLogFile = path.resolve(appSettings.basedir, 'var/log/okunishitaka.com-access.log');

/**
 * Error log file path.
 */
appSettings.errorLogFile = path.resolve(appSettings.basedir, 'var/log/okunishitaka.com-error.log');

module.exports = appSettings;