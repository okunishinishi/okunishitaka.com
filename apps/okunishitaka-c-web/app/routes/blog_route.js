/**
 * Routing for blog.
 * @module okunishitaka-c-web/app/routes/blogRoute
 */

"use strict";

var h = require('./_helper'),
    blogStorage = h.storages.blogStorage,
    schemas = require('../schemas'),
    async = h.async,
    rest = h.handlers.rest,
    StorageHandler = h.handlers.StorageHandler;


var blogConverters = {
    outbound: function blogOutboundConverter(blog) {
        return blog;
    },
    inbound: function blogInboundConverter(blog) {
        return blog;
    }
};


/**
 * One blog data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.one = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.OneRestHandler({
                storage: blogStorage,
                converters: blogConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};

/**
 * List blog data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.list = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.ListRestHandler({
                storage: blogStorage,
                converters: blogConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};


/**
 * Create blog data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.create = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.CreateRestHandler({
                storage: blogStorage,
                schema: schemas.blogCreateSchema,
                converters: blogConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};

/**
 * Update blog data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.update = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.UpdateRestHandler({
                storage: blogStorage,
                schema: schemas.blogUpdateSchema,
                converters: blogConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};


/**
 * Destroy blog data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.destroy = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.DestroyRestHandler({
                storage: blogStorage,
                converters: blogConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};

