/**
 * Routing for blogTag.
 * @module okunishitaka-c-web/app/routes/blogTagRoute
 */

"use strict";

var h = require('./_helper'),
    blogTagStorage = h.storages.blogTagStorage,
    schemas = require('../schemas'),
    async = h.async,
    rest = h.handlers.rest,
    StorageHandler = h.handlers.StorageHandler;


var blogTagConverters = {
    outbound: function blogTagOutboundConverter(blogTag) {
        return blogTag;
    },
    inbound: function blogTagInboundConverter(blogTag) {
        return blogTag;
    }
};




/**
 * List blogTag data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.list = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.ListRestHandler({
                storage: blogTagStorage,
                converters: blogTagConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};


/**
 * Create blogTag data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.create = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.CreateRestHandler({
                storage: blogTagStorage,
                schema: schemas.blogTagCreateSchema,
                converters: blogTagConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};

/**
 * Update blogTag data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.update = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.UpdateRestHandler({
                storage: blogTagStorage,
                schema: schemas.blogTagUpdateSchema,
                converters: blogTagConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};


/**
 * Destroy blogTag data.
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
exports.destroy = function (req, res, next) {
    async.series([
        function (next) {
            var handler = new rest.DestroyRestHandler({
                storage: blogTagStorage,
                converters: blogTagConverters
            });
            handler.handle(req, res, next);
        }
    ], next);
};

