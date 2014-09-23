/**
 * Route for settings.
 */

"use strict";

var h = require('./_helper'),
    settingStorage = h.storages.settingStorage,
    schemas = h.schemas,
    async = h.async,
    interceptors = require('./interceptors'),
    SchemaInterceptor = interceptors.SchemaInterceptor,
    StorageInterceptor = interceptors.StorageInterceptor;

exports._singletonId = '00000';

/**
 * Find a setting.
 * @param req
 * @param res
 * @param next
 */
exports.one = function (req, res, next) {
    req.params._id = exports._singletonId;
    var storageInterceptor = new StorageInterceptor(settingStorage);
    async.series([
        function (callback) {
            storageInterceptor.one(req, res, next);
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
    var schemaInterceptor = new SchemaInterceptor(schemas.settingSaveSchema),
        storageInterceptor = new StorageInterceptor(settingStorage);
    async.series([
        function (callback) {
            schemaInterceptor.validate(req, res, callback);
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
                        storageInterceptor.update(req, res, callback);
                    } else {
                        storageInterceptor.create(req, res, callback);
                    }
                }
            ])
        }
    ], next);
}