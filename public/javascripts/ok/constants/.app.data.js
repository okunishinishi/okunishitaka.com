/**
 * Data for app-constant.js
 */
"use strict";

var appSettings = require('../../../../app/app_settings'),
    pkg = require('../../../../package');

module.exports = {
    SUPPORTED_LANGS: appSettings.supportedLangs,
    VERSION: pkg.version
}