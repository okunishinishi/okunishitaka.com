/**
 * Handler to validate with schemas.
 * @memberof module:okunishitaka-dot-com/app/routes/handlers
 * @constructor SchemaHandler
 * @param {JsonSchema} schema
 */

"use strict";

var h = require('./../_helper'),
    codes = h.codes,
    async = h.async;

/** @lends SchemaHandler */
function SchemaHandler(schema) {
    var s = this;
    s.schema = schema || {};
}

SchemaHandler.prototype = {
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

module.exports = SchemaHandler;