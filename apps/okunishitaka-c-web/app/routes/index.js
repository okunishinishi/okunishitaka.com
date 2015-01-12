/**
 * @file App routes.
 * @module kaite-web/app/routes
 */

"use strict";

module.exports = {
    get blogRoute() { return require('./blog_route'); },
    get blogTagRoute() { return require('./blog_tag_route'); },
    get profileRoute() { return require('./profile_route'); },
    get workRoute() { return require('./work_route'); }
};