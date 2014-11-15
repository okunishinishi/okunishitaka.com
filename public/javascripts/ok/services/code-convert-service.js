/**
 * Code convert service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('codeConvertService', function CodeConvertService(codeConstant) {

            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;

            var s = this;
            /**
             * Unexpected error code.
             * @type {number}
             */
            s.UNEXPECTED_ERROR = appErrorCodes.UNEXPECTED_ERROR;

            /**
             * Get error code for http status
             * @param {number} statusCode - HTTP status code.
             */
            s.errorCodeWithHttpStatus = function (statusCode) {
                statusCode = Number(statusCode);
                var keys = Object.keys(appErrorCodes);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var hit = httpStatusCodes[key] === statusCode;
                    if (hit) {
                        return appErrorCodes[key];
                    }
                }
                return null;
            }
        });
})(angular, apeman);