/**
 * @ngdoc object
 * @name AppError
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppError', function defineAppError(objectUtil) {
            var copy = objectUtil.copy.bind(objectUtil);

            /**
             * @augments Error
             * @constructor AppError
             * @param {number} code - App error code.
             * @param {object} data - Error data.
             */
            function AppError(code, data) {
                var s = this;
                s.init.apply(s, arguments);
            }

            AppError.prototype = copy(
                /** @lends AppError.prototype */
                {
                    name: 'AppError',
                    /**
                     * Initialize an error.
                     * @param {number} code - Error code.
                     * @param {string} data - Error data.
                     */
                    init: function (code, data) {
                        var s = this;
                        s.code = code;
                        s.data = data;
                    }
                },
                new Error()
            );

            copy(
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
                        Defined.prototype = copy(
                            properties, new AppError()
                        );
                        copy(AppError, Defined);
                        return Defined;
                    }
                },
                AppError
            );

            return AppError;

        });

})(angular);