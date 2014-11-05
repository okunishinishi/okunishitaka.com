/**
 * Data for app-constant.js
 */
"use strict";

var appSettings = require('../../../../app/app_settings'),
    server = require('../../../../server.json'),
    ga = require('../../../../ga.json'),
    pkg = require('../../../../package');

module.exports = {
    SUPPORTED_LANGS: appSettings.supportedLangs,
    VERSION: pkg.version,
    HOMEPAGE: pkg.homepage,
    DOMAIN: server.domain,
    GA_TRACKING_ID: ga.trakingId
}