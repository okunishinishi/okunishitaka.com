/**
 * Route for blogs.
 */

"use strict";

var h = require('./_helper'),
    blogStorage = h.storages.blogStorage,
    async = h.async,
    interceptors = require('./interceptors'),
    SchemaInterceptor = interceptors.SchemaInterceptor,
    StorageInterceptor = interceptors.StorageInterceptor;

/**
 * Find a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.one = function one(req, res, next) {
    var storageInterceptor = new StorageInterceptor(blogStorage);
    async.series([
        function (callback) {
            storageInterceptor.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageInterceptor.one(req, res, callback);
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
    var storageInterceptor = new StorageInterceptor(blogStorage);
    async.series([
        function (callback) {
            storageInterceptor.list(req, res, next);
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
    var storageInterceptor = new StorageInterceptor(blogStorage);
    async.series([
        function (callback) {
            storageInterceptor.create(req, res, callback);
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
    var storageInterceptor = new StorageInterceptor(blogStorage);
    async.series([
        function (callback) {
            storageInterceptor.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageInterceptor.checkConflict(req, res, callback);
        },
        function (callback) {
            storageInterceptor.update(req, res, callback);
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
    var storageInterceptor = new StorageInterceptor(blogStorage);
    async.series([
        function (callback) {
            storageInterceptor.checkIdentity(req, res, callback);
        },
        function (callback) {
            storageInterceptor.destroy(req, res, next);
        }
    ], next);
}