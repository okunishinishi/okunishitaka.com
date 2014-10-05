/**
 * ok errors module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.errors', [
            'ok.constants'
        ]);
})(angular);

/**
 * App api error.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppApiError', function defineAppApiError (AppError) {

            /**
             * @augments Error
             * @constructor AppApiError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            var AppApiError = AppError.define(
                /** @lends AppApiError.prototype */
                {
                    name: 'AppApiError'
                }
            );

            return AppApiError;

        });

})(angular, apeman);
/**
 * AppError error.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppError', function defineAppError() {

            /**
             * @augments Error
             * @constructor AppError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            function AppError(code, message) {
                var s = this;
                s.init.apply(s, arguments);
            };

            AppError.prototype = ap.copy(
                /** @lends AppError.prototype */
                {
                    name: 'AppError',
                    /**
                     * Initialize an error.
                     * @param {number} code - Error code.
                     * @param {string} message - Error message.
                     */
                    init: function (code, message) {
                        var s = this;
                        s.code = code;
                        s.message = message;
                    }
                },
                new Error()
            );

            ap.copy(
                {
                    /**
                     * Define an app error.
                     * @param {object} properties - Error properties.
                     */
                    define: function (properties) {
                        var Defined = function () {
                            var s = this;
                            s.init.apply(s, arguments);
                        };
                        Defined.prototype = ap.copy(
                            properties, new AppError()
                        );
                        ap.copy(AppError, Defined);
                        return Defined;
                    }
                },
                AppError
            )

            return AppError;

        });

})(angular, apeman);
