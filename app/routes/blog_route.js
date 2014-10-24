/**
 * Route for blogs.
 * @module module:okunishitaka-dot-com/app/routes/blogRoute
 */

"use strict";

var h = require('./_helper'),
    blogStorage = h.storages.blogStorage,
    async = h.async,
    SchemaHandler = require('./handlers/schema_handler'),
    StorageHandler = require('./handlers/storage_handler');

/** @lends blogRoute */
exports = module.exports = {};

/**
 * Find a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.one = function one(req, res, next) {
    var storageHandler = new StorageHandler(blogStorage);
    async.series([
        function (callback) {
            storageHandler.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageHandler.one(req, res, callback);
        }
    ], next);
}

/**
 * List blogs.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.list = function list(req, res, next) {
    var storageHandler = new StorageHandler(blogStorage);
    async.series([
        function (callback) {
            storageHandler.list(req, res, callback);
        }
    ], next);
}


/**
 * Create a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.create = function create(req, res, next) {
    var storageHandler = new StorageHandler(blogStorage);
    async.series([
        function (callback) {
            storageHandler.create(req, res, callback);
        }
    ], next);
}

/**
 * Update a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.update = function update(req, res, next) {
    var storageHandler = new StorageHandler(blogStorage);
    async.series([
        function (callback) {
            storageHandler.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageHandler.checkConflict(req, res, callback);
        },
        function (callback) {
            storageHandler.update(req, res, callback);
        }
    ], next);
}

/**
 * Destroy a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.destroy = function destroy(req, res, next) {
    var storageHandler = new StorageHandler(blogStorage);
    async.series([
        function (callback) {
            storageHandler.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageHandler.destroy(req, res, callback);
        }
    ], next);
}