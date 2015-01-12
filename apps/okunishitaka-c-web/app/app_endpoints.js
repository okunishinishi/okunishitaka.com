/**
 * App endpoints.
 * @module karakuri-g-web/app/appEndpoints
 */

"use strict";


var r = require('./routes');

module.exports = Object.seal(
    {
        /**
         * Route for blog.
         */
        '/api/blog': {
            'GET': r.blogRoute.list,
            'POST': r.blogRoute.create
        },
        /**
         * Route for blog.
         */
        '/api/blog/:_id': {
            'GET': r.blogRoute.one,
            'PUT': r.blogRoute.update,
            'DELETE': r.blogRoute.destroy
        },
        /**
         * Route for blog tag.
         */
        '/api/blog-tag': {
            'GET': r.blogRoute.list,
            'POST': r.blogRoute.create
        },
        /**
         * Route for blog tag.
         */
        '/api/blog-tag/:_id': {
            'DELETE': r.blogRoute.destroy
        }

    }
);