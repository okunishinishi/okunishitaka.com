/**
 * @file App routes.
 * @module okunishitaka.com/app/routes */

"use strict";

module.exports = {
    get blogRoute() { return require('./blog_route'); },    get interceptors() { return require('./interceptors'); },    get settingRoute() { return require('./setting_route'); }
};