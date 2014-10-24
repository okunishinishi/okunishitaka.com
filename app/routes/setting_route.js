/**
 * Route for settings.
 * @module module:okunishitaka-dot-com/app/routes/settingRoute
 */

"use strict";

var h = require('./_helper'),
    settingStorage = h.storages.settingStorage,
    schemas = h.schemas,
    async = h.async,
    rest = require('./handlers/rest'),
    SchemaHandler = require('./handlers/schema_handler'),
    StorageHandler = require('./handlers/storage_handler');

exports._singletonId = '00000';

/**
 * Find a setting.
 * @param req
 * @param res
 * @param next
 */
exports.one = function (req, res, next) {
    req.params._id = exports._singletonId;
    var storageHandler = new StorageHandler(settingStorage);
    async.series([
        function (callback) {
            storageHandler.one(req, res, next);
        }
    ], next);
}

/**
 * Save a setting.
 * @param req
 * @param res
 * @param next
 */
exports.save = function (req, res, next) {
    var schemaHandler = new SchemaHandler(schemas.settingSaveSchema),
        storageHandler = new StorageHandler(settingStorage);
    async.series([
        function (callback) {
            schemaHandler.validate(req, res, callback);
        },
        function (callback) {
            var id = exports._singletonId;
            async.waterfall([
                function (callback) {
                    settingStorage.one(id, callback);
                },
                function (data, callback) {
                    req.body._id = id;
                    if (data) {
                        storageHandler.update(req, res, callback);
                    } else {
                        storageHandler.create(req, res, callback);
                    }
                }
            ])
        }
    ], next);
}