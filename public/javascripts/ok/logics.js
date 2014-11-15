/**
 * ok logics module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.logics', [
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

/**
 * Error code logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('errorCodeLogic', function defineErrorCodeLogic(codeConstant) {
            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;
            return {
                /**
                 * Unexpected error code.
                 * @type {number}
                 */
                UNEXPECTED_ERROR: codeConstant.appErrorCodes.UNEXPECTED_ERROR,
                /**
                 * Get error code for http status
                 * @param {number} statusCode - HTTP status code.
                 */
                errorCodeWithHttpStatus: function (statusCode) {
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
            }
        });
})(angular, apeman);
/**
 * Text link logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('textLinkLogic', function defineTextLinkLogic(linkUrlConstant, imageUrlConstant) {
            return {
                toLinkedHtml: function (text, links) {
                    var html = String(text);
                    Object.keys(links).forEach(function (key) {
                        html = html.replace(new RegExp(key, 'g'), function (text) {
                            var name = links[key],
                                href = linkUrlConstant[name] || imageUrlConstant[name];
                            if (href) {
                                return '<a href="' + href + '">' + text + '</a>';
                            } else {
                                return text;
                            }
                        });
                    });
                    return html;

                }
            }
        });
})(angular, apeman);
