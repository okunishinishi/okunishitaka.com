/**
 * Handler to rest of getting one.
 * @memberof module:okunishitaka-dot-com/app/routes/handlers/rest
 * @constructor OneRestHandler
 * @param {object} config - Handler configuration.
 * @param {Storage} config.storage
 * @param {JsonSchema} config.schema
 */

"use strict";

var h = require('../../_helper'),
    async = h.async,
    RestHandler = require('./rest_handler'),
    StorageHandler = require('./../storage_handler');

module.exports = RestHandler.define(
    /** @lends OneRestHandler.prototype */
    {
        /**
         * Handle request.
         * @param {http.ServerRequest} req - Http request
         * @param {http.ServerResponse} res - Http response
         * @param {function} next - Call next.
         */
        handle: function (req, res, next) {
            var s = this,
                storageHandler = new StorageHandler(s.storage);
            async.series([
                function (callback) {
                    storageHandler.checkIdentity(req, res, callback);
                },
                function (callback) {
                    storageHandler.one(req, res, callback);
                }
            ], next);
        }
    }
);