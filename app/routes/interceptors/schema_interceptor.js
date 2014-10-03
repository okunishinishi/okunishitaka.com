/**
 * Interceptor to validate with schemas.
 * @memberof module:okunishitaka-dot-com/app/routes/interceptors
 * @constructor SchemaInterceptor
 * @param {JsonSchema} schema
 */

"use strict";

var h = require('./../_helper'),
    codes = h.codes,
    async = h.async;

/** @lends SchemaInterceptor */
function SchemaInterceptor(schema) {
    var s = this;
    s.schema = schema || {};
}

SchemaInterceptor.prototype = {
    /**
     * Validate request.
     * @param {http.ServerRequest} req - Request to validate.
     * @param {http.ServerResponse} res - Response to send if validation failed.
     * @param {functon} next - Next handler. Called only when request is valid.
     */
    validate: function (req, res, next) {
        var s = this;
        async.waterfall([
            function (callback) {
                h.validate(s.schema, req.body, callback);
            },
            function (valid, vError, callback) {
                if (!valid) {
                    res.statusCode = codes.httpStatus.VALIDATION_ERROR;
                    res.sendJson(h.errorData(vError));
                }
                callback(null, valid);
            }
        ], function (err, valid) {
            if (err || valid) {
                next(err);
            }
        });
    }
}

module.exports = SchemaInterceptor;