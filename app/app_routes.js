/**
 * App route settings.
 */



"use strict";

var r = require('./routes');
module.exports = {
    '/blogs': {
        GET: r.blogRoute.list,
        POST: r.blogRoute.create
    },
    '/blogs/:_id': {
        GET: r.blogRoute.one,
        PUT: r.blogRoute.update,
        DELETE: r.blogRoute.destroy
    },
    '/settings': {
        GET: r.settingRoute.one,
        PUT: r.settingRoute.save
    }
};