/**
 * Helper for routes module.
 */

"use strict";

var u = require('apeman-util'),
    async = u.ext.async,
    schemas = require('../schemas'),
    storages = require('../app_storages');

exports.storages = storages;
exports.schemas = schemas;
exports.async = async;


exports.validate = function (schema, data, callback) {
    async.waterfall([
        function (callback) {
            schema.validate(data, callback);
        },
        function (report, callback) {
            var valid = report.valid,
                messages = [].concat(report.errors).map(function (error) {
                    return error.messages;
                });
            callback(null, report.valid, messages);
        }
    ], callback);
};

exports.statusCode = {
    notFoundError:404,
    conflictError:409,
    validationError: 422
}

exports.successData = function (data) {
    return {
        status: 'success',
        data: data
    }
};

exports.errorData = function (data) {
    return {
        status: 'error',
        error: data
    }
}

/**
 * Async done function.
 */
exports.done = function (next) {
    return function (err) {
        if (err) {
            console.log('err', err);
            next(err);
        }
    }
};
