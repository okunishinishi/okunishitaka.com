/**
 * @file App routes.
 * @module okunishitaka-dot-com/app/routes
 *
 * @property blogRoute {object} - {@link module:okunishitaka-dot-com/app/routes/blogRoute|blogRoute module}.
 * @property interceptors {object} - {@link module:okunishitaka-dot-com/app/routes/interceptors|interceptors module}.
 * @property settingRoute {object} - {@link module:okunishitaka-dot-com/app/routes/settingRoute|settingRoute module}.

 */

"use strict";

module.exports = {
    
    get blogRoute() { return require('./blog_route'); },

    get interceptors() { return require('./interceptors'); },

    get settingRoute() { return require('./setting_route'); }
};