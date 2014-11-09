/**
 * Route for settings.
 * @module module:okunishitaka-dot-com/app/routes/settingRoute
 */

"use strict";

var h = require('./_helper'),
    settingStorage = h.storages.settingStorage,
    schemas = h.schemas,
    async = h.async,
    rest = require('./handlers/rest');

exports._singletonId = '00000';

/**
 * Find a setting.
 * @param req
 * @param res
 * @param next
 */
exports.singleton = function (req, res, next) {
    var handler = new rest.SingletonRestHandler({
        storage: settingStorage,
        id: exports._singletonId
    });
    handler.one(req, res, next);
}

/**
 * Save a setting.
 * @param req
 * @param res
 * @param next
 */
exports.save = function (req, res, next) {
    var handler = new rest.SingletonRestHandler({
        storage: settingStorage,
        schema: schemas.settingSaveSchema,
        id: exports._singletonId
    });
    handler.save(req, res, next);
}