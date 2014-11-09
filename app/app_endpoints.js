/**
 * App route map.
 * @module okunishitaka-dot-com/app/appEndpoints
 */



"use strict";

var r = require('./routes');

module.exports = Object.seal(
    /** @lends module:okunishitaka-dot-com/app/appEndpoints */
    {
        /**
         * Routes for blogs.
         * @see module:okunishitaka-dot-com/app/routes/blogRoute
         * @property {function} GET - List blogs.
         * @property {function} POST - Create a new blog.
         */
        '/api/blogs': {
            GET: r.blogRoute.list,
            POST: r.blogRoute.create
        },
        /**
         * Routes for a single blog.
         * @see module:okunishitaka-dot-com/app/routes/settingRoute
         * @property {function} GET - Get a blog.
         * @property (function} PUT - Update a blog.
         * @property {function} DELTE - Destory a blog.
         */
        '/api/blogs/:_id': {
            GET: r.blogRoute.one,
            PUT: r.blogRoute.update,
            DELETE: r.blogRoute.destroy
        },
        /**
         * Routes for the settings.
         * @property {function} GET - Get settings.
         * @property {function} PUT - Update settings.
         */
        '/api/settings': {
            GET: r.settingRoute.singleton,
            PUT: r.settingRoute.save
        },
        /**
         * Routes for the profiles.
         * @property {function} GET - Get profile.
         * @property {function} PUT - Update profile.
         */
        '/api/profiles': {
            GET: r.profileRoute.singleton,
            PUT: r.profileRoute.save
        },
        /**
         * Routes for works.
         * @property {function} GET - List works.
         */
        '/api/works': {
            GET: r.workRoute.list
        }
    });