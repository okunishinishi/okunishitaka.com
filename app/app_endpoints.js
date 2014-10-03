/**
 * App route map.
 * @module okunishitaka-dot-com/app/appEndpoints
 */



"use strict";

var r = require('./routes');

/** @lends module:okunishitaka-dot-com/app/appEndpoints */
module.exports = {
    /**
     * Routes for blogs.
     * @see module:okunishitaka-dot-com/app/routes/blogRoute
     * @property {function} GET - List blogs.
     * @property {function} POST - Create a new blog.
     */
    '/blogs': {
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
    '/blogs/:_id': {
        GET: r.blogRoute.one,
        PUT: r.blogRoute.update,
        DELETE: r.blogRoute.destroy
    },
    /**
     * Routes for the settings.
     * @property {function} GET - Get settings.
     * @property {function} PUT - Update settings.
     */
    '/settings': {
        GET: r.settingRoute.one,
        PUT: r.settingRoute.save
    }
};