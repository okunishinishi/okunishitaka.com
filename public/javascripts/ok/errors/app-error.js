/**
 * AppError error.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppError', function AppErrorFactory(AppError) {

            /**
             * @augments Error
             * @constructor AppError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            var AppError = AppError.define(
                /** @lends AppError.prototype */
                {

                }
            );

            return AppError;

        });

})(angular, apeman);