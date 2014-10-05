/**
 * Logic for http status code.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('httpStatusCodeLogic', function httpStatusCodeLogic(codeConstant, objectUtil) {

            var codes = codeConstant.httpStatusCodes;
            return {
                /**
                 * Name for a status code.
                 * @param {number} statusCode - Status code.
                 * @returns {string} - Status name defined in code.
                 */
                nameForStatusCode: function (statusCode) {
                    return objectUtil.keysForValue(codes, Number(statusCode)).shift();
                },
                /**
                 * Status code for a name.
                 * @param {string} name - Status code name.
                 * @returns {number} - Status code.
                 */
                statusCodeForName: function (name) {
                    return codes[name];
                }
            }
        });
})(angular, apeman);