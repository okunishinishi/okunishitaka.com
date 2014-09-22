/**
 * App route settings.
 */



"use strict";

var r = require('./routes');

module.exports = {
    '/settings': {
        GET: r.settingRoute.one,
        PUT: r.settingRoute.save
    }
};