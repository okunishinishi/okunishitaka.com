/**
 * @file App routes.
 * @module okunishitaka-dot-com/app/routes
 *
 * @property blogRoute {object} - {@link module:okunishitaka-dot-com/app/routes/blogRoute|blogRoute module}.
 * @property handlers {object} - {@link module:okunishitaka-dot-com/app/routes/handlers|handlers module}.
 * @property profileRoute {object} - {@link module:okunishitaka-dot-com/app/routes/profileRoute|profileRoute module}.
 * @property settingRoute {object} - {@link module:okunishitaka-dot-com/app/routes/settingRoute|settingRoute module}.
 * @property workRoute {object} - {@link module:okunishitaka-dot-com/app/routes/workRoute|workRoute module}.
 */

"use strict";

module.exports = {
    get blogRoute() { return require('./blog_route'); },
    get handlers() { return require('./handlers'); },
    get profileRoute() { return require('./profile_route'); },
    get settingRoute() { return require('./setting_route'); },
    get workRoute() { return require('./work_route'); }
};