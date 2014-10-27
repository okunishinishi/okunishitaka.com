/**
 * Handler for singleton model.
 * @augments RestHandler
 * @memberof module:okunishitaka-dot-com/app/routes/handlers
 * @constructor CreateRestHandler
 * @param {object} config - Handler configuration.
 * @param {string} config.id - Singleton id.
 * @param {Storage} config.storage
 * @param {JsonSchema} config.schema
 */

"use strict";

var h = require('../../_helper'),
    async = h.async,
    RestHandler = require('./rest_handler'),
    StorageHandler = require('../storage_handler'),
    SchemaHandler = require('../schema_handler');

module.exports = RestHandler.define(
    /** @lends SingleTonRestHandler.prototype */
    {
        schema: null,
        storage: null,
        id: '00000',
        one: function (req, res, next) {
            var s = this,
                storage = s.storage,
                id = s.id;

            req.params._id = id;
            var storageHandler = new StorageHandler(storage);
            async.series([
                function (callback) {
                    storageHandler.one(req, res, next);
                }
            ], next);

        },
        save: function (req, res, next) {
            var s = this,
                id = s.id,
                storage = s.storage,
                schemaHandler = new SchemaHandler(s.schema),
                storageHandler = new StorageHandler(storage);
            async.series([
                function (callback) {
                    schemaHandler.validate(req, res, callback);
                },
                function (callback) {
                    async.waterfall([
                        function (callback) {
                            storage.one(id, callback);
                        },
                        function (data, callback) {
                            req.body._id = id;
                            if (data) {
                                storageHandler.update(req, res, callback);
                            } else {
                                storageHandler.create(req, res, callback);
                            }
                        }
                    ]);
                }
            ], next);
        }
    }
);
