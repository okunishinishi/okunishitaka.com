/**
 * Interceptor to access storage.
 * @memberof module:okunishitaka-dot-com/app/routes/interceptors
 * @constructor StorageInterceptor
 * @param {JsonStorage} storage
 */

"use strict";

var h = require('../_helper'),
    codes = h.codes,
    async = h.async;


function StorageInterceptor(storage) {
    var s = this;
    s.storage = storage;
}

StorageInterceptor.valuesWithKeys = function (object, keys) {
    var result = {};
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        if (object.hasOwnProperty(key)) {
            result[key] = object[key];
        }
    }
    return result;
}


StorageInterceptor.prototype = {
    /**
     * Check data identitiy.
     * @param req
     * @param res
     * @param next
     */
    checkIdentity: function (req, res, next) {
        var s = this,
            id = req.params._id;
        async.waterfall([
            function (callback) {
                s.storage.one(id, callback);
            },
            function (data, callback) {
                var valid = !!data;
                if (!valid) {
                    res.statusCode = codes.httpStatusCodes.NOT_FOUND_ERROR;
                    res.sendJson(h.errorData('Data not found for id: ' + id)); //TODO multi lang
                }
                callback(null, valid);
            }
        ], function (err, valid) {
            if (err || valid) {
                next(err);
            }
        });
    },
    /**
     * Check conflicts.
     * @param req
     * @param res
     * @param next
     */
    checkConflict: function (req, res, next) {
        var s = this,
            id = req.params._id,
            vr = req.body._vr;
        async.waterfall([
            function (callback) {
                s.storage.one(id, callback);
            },
            function (data, callback) {
                var valid = data && (Number(data._vr) === Number(vr));
                if (!valid) {
                    res.statusCode = codes.httpStatusCodes.CONFLICT_ERROR;
                    res.sendJson(h.errorData('Conflict with verion: ' + id)); //TODO multi lang
                }
                callback(null, valid);
            }
        ], function (err, valid) {
            if (err || valid) {
                next(err);
            }
        });
    },
    /**
     * Find a storage data.
     * @param req
     * @param res
     * @param next
     */
    one: function (req, res, next) {
        var s = this,
            id = req.params._id;
        async.waterfall([
            function (callback) {
                s.storage.one(id, callback);
            },
            function (data, callback) {
                res.sendJson(data || {});
                callback(null);
            }
        ], next);
    },
    /**
     * List data.
     * @param req
     * @param res
     * @param next
     */
    list: function (req, res, next) {
        var s = this;
        var q = req.query || {};
        var condition = StorageInterceptor.valuesWithKeys(q, s.storage.indices),
            chopper = {
                skip: Number(q._skip || 0),
                limit: Number(q._limit || Infinity)
            },
            sorter = {
                key: q._sort || '_at',
                desc: ['true', 'yes', '1'].indexOf((q._reverse || '').toLowerCase()) !== -1
            }
        async.waterfall([
            function (callback) {
                s.storage.list(condition, sorter, chopper, callback);
            },
            function (data, callback) {
                res.sendJson(data || []);
                callback(null);
            }
        ], next);
    },
    /**
     * Create a storage data.
     * @param req
     * @param res
     * @param next
     */
    create: function (req, res, next) {
        var s = this,
            data = req.body;
        async.waterfall([
            function (callback) {
                s.storage.insert(data, callback);
            },
            function (data, callback) {
                res.sendJson(h.successData(data));
                callback(null);
            }
        ], next);
    },
    /**
     * Update a storage data.
     * @param req
     * @param res
     * @param next
     */
    update: function (req, res, next) {
        var s = this,
            data = req.body;
        var id = req.params._id || req.body._id;
        async.waterfall([
            function (callback) {
                s.storage.update(id, data, callback);
            },
            function (data, callback) {
                res.sendJson(h.successData(data));
                callback(null);
            }
        ], next);
    },
    /**
     * Destroy a storage data.
     * @param req
     * @param res
     * @param next
     */
    destroy: function (req, res, next) {
        var s = this,
            id = req.params._id;
        async.waterfall([
            function (callback) {
                s.storage.destroy(id, callback);
            },
            function (data, callback) {
                res.sendJson(h.successData(data));
                callback(null);
            }
        ], next);
    }
};

module.exports = StorageInterceptor;