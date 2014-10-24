/**
 * Route for blogs.
 * @module module:okunishitaka-dot-com/app/routes/blogRoute
 */

"use strict";

var h = require('./_helper'),
    blogStorage = h.storages.blogStorage,
    rest = require('./handlers/rest'),
    async = h.async;

/** @lends blogRoute */
exports = module.exports = {};

/**
 * Find a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.one = function one(req, res, next) {
    var handler = new rest.OneRestHandler({
        storage: blogStorage
    });
    handler.handle(req, res, next);
}

/**
 * List blogs.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.list = function list(req, res, next) {
    var handler = new rest.ListRestHandler({
        storage: blogStorage
    });
    handler.handle(req, res, next);
}


/**
 * Create a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.create = function create(req, res, next) {
    var handler = new rest.CreateRestHandler({
        storage: blogStorage
    });
    handler.handle(req, res, next);
}

/**
 * Update a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.update = function update(req, res, next) {
    var handler = new rest.UpdateRestHandler({
        storage: blogStorage
    });
    handler.handle(req, res, next);
}

/**
 * Destroy a blog.
 * @param {http.ServerRequest} req - Http request
 * @param {http.ServerResponse} res - Http response
 * @param {function} next - Call next.
 */
exports.destroy = function destroy(req, res, next) {
    var handler = new rest.DestroyRestHandler({
        storage: blogStorage
    });
    handler.handle(req, res, next);
}