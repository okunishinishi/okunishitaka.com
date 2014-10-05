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
 * Page title logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('pageTitleLogic', function definePageTitleLogic() {
            return {
                /**
                 * Get title for a page.
                 * @param {object} l - Locale object.
                 * @param {string} pageName - Page name.
                 */
                tilteForPage: function (l, pageName) {
                    var appName = l.meta.name;
                    if (!pageName) {
                        return appName;
                    }
                    pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                    return [pageName, appName].join(' - ');
                }
            }
        });
})(angular, apeman);
