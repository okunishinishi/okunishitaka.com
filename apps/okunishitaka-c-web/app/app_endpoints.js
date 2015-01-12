/**
 * App endpoints.
 * @module karakuri-g-web/app/appEndpoints
 */

"use strict";


var r = require('./routes');

module.exports = Object.seal(
    {
        /**
         * Route for admin blog.
         */
        '/admin/api/blog': {
            'GET': r.blogRoute.list,
            'POST': r.blogRoute.create
        },
        /*
         * Route for admin blog.
         */
        '/admin/api/blog/:_id': {
            'GET': r.blogRoute.one,
            'PUT': r.blogRoute.update,
            'DELETE': r.blogRoute.destroy
        },
        /**
         * Route for blog tag.
         */
        '/admin/api/blog-tag': {
            'GET': r.blogTagRoute.list,
            'POST': r.blogTagRoute.create
        },
        /**
         * Route for blog tag.
         */
        '/admin/api/blog-tag/:_id': {
            'DELETE': r.blogTagRoute.destroy
        },
        /**
         * Route for blog.
         */
        '/api/blog': {
            'GET': r.blogRoute.list
        },
        /**
         * Route for blog.
         */
        '/api/blog/:_id': {
            'GET': r.blogRoute.one
        },
        /**
         * Route for blog tag.
         */
        '/api/blog-tag': {
            'GET': r.blogTagRoute.list
        },
        /**
         * Route for profile.
         */
        '/api/profile': {
            'GET': r.profileRoute.one
        },
        /**
         * Route for work.
         */
        '/api/work': {
            'GET': r.workRoute.list
        }

    }
);