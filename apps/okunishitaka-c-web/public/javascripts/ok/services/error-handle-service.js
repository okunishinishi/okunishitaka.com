/**
 * @ngdoc object
 * @name errorHandleService
 * @description Error handle service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('errorHandleService', function ErrorHandleService(l,
                                                                   codeConstant,
                                                                   toastMessageService,
                                                                   $rootScope) {
            var s = this,
                appErrorCodes = codeConstant.appErrorCodes;

            /**
             * Show validation error.
             * @param {object[]} data - Validation error data.
             * @param {object} scope - Scope to evaluate message.
             * @private
             */
            s._showValidationError = function (data, scope) {

                scope.validationErrors = [].concat(data || []).map(function (data) {
                    if (data.messageKey) {
                        var message = l.errors[data.messageKey];
                        data.message = (message || data.message).replace(/\{key\}/g, data.key);
                    }
                    return data;
                });
            };

            /**
             * Handle error.
             * @param {object} err - Error to handle.
             * @param {object} [scope=$rootScope] - Scope to evaluate message.
             */
            s.handleError = function (err, scope) {
                scope = scope || $rootScope;
                var messages = [].concat(err.message || []);
                switch (err.code) {
                    case appErrorCodes.VALIDATION_ERROR:
                        s._showValidationError(err.data, scope);
                        break;
                    case appErrorCodes.CONFLICT_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONFLICT);
                        break;
                    case appErrorCodes.CONNECTION_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONNECTION);
                        break;
                    case appErrorCodes.NOT_FOUND_ERROR:
                        toastMessageService.showErrorMessage(l.errors.NOT_FOUND_ERROR);
                        break;
                    case appErrorCodes.SERVER_ERROR:
                    case appErrorCodes.UNEXPECTED_ERROR:
                    default:
                        messages.forEach(function (message) {
                            console.error(message);
                        });
                        toastMessageService.showErrorMessage(l.errors.UNEXPECTED);
                }
            };

            /**
             * Clear errors in scope.
             * @param scope
             */
            s.clearErrors = function (scope) {
                scope.validationErrors = {};
            };

        });

})(angular);