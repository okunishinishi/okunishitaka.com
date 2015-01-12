/**
 * Data for app-constant.js
 */
"use strict";

var appSettings = require('../../../../app/app_settings'),
    pkg = require('../../../../../../package');

module.exports = {
    VERSION: pkg.version,
    SUPPORTED_LANGS: appSettings.supportedLangs
};