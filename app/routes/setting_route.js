/**
 * Route for settings.
 */

"use strict";

var h = require('./_helper'),
    settingStorage = h.storages.settingStorage,
    schemas = h.schemas,
    async = h.async;

exports._singletonId = '00000';

/**
 * Find a setting.
 * @param req
 * @param res
 * @param next
 */
exports.one = function (req, res, next) {
    var id = exports._singletonId;
    async.waterfall([
        function (callback) {
            settingStorage.one(id, callback);
        },
        function (data, callback) {
            res.sendJson(data || {});
            callback(null);
        }
    ], h.done(next));
}

/**
 * Save a setting.
 * @param req
 * @param res
 * @param next
 */
exports.save = function (req, res, next) {
    var data = req.body;
    data._id = exports._singletonId;
    async.waterfall([
        function (callback) {
            h.validate(schemas.settingSaveSchema, data, callback);
        },
        function (valid, vError, callback) {
            if (!valid) {
                res.statusCode = h.statusCode.validationError;
                res.sendJson(h.errorData(vError));
                return;
            }
            async.waterfall([
                function (callback) {
                    settingStorage.save(data, callback);
                },
                function (data, callback) {
                    res.sendJson(h.successData(data));
                    callback(null);
                }
            ], callback);
        }
    ], h.done(next));
}