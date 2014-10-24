/**
 * Handler to rest of getting one.
 * @augments RestHandler
 * @memberof module:okunishitaka-dot-com/app/routes/handlers
 * @constructor CreateRestHandler
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
    /** @lends CreateRestHandler.prototype */
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
                    storageHandler.create(req, res, callback);
                }
            ], next);
        }
    }
);