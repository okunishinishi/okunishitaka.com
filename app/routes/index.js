/**
 * @file App routes.
 * @module okunishitaka-dot-com/app/routes
 *
 * @property blogRoute {object} - {@link module:okunishitaka-dot-com/app/routes/blogRoute|blogRoute module}.
 * @property handlers {object} - {@link module:okunishitaka-dot-com/app/routes/handlers|handlers module}.
 * @property settingRoute {object} - {@link module:okunishitaka-dot-com/app/routes/settingRoute|settingRoute module}.
 */

"use strict";

module.exports = {
    get blogRoute() { return require('./blog_route'); },
    get handlers() { return require('./handlers'); },
    get settingRoute() { return require('./setting_route'); }
};