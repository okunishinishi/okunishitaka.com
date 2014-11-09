/**
 * Toast message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('toastMessageService', function ToastMessageService($rootScope, $timeout) {
            var s = this;
            s._dismissTimer = null;
            s._dismissDuration = 2000;
            s._showMessage = function (message, type) {
                $rootScope.toasts = $rootScope.toasts || {};
                var queue = $rootScope.toasts[type] = $rootScope.toasts[type] || [];
                queue.push(message);
                s._dismissTimer = $timeout(function () {
                    queue.shift();
                }, s._dismissDuration);
            }

            /**
             * Show infor message.
             * @param {string} message - Message to show.
             */
            s.showInfoMessage = function (message) {
                s._showMessage(message, 'info');
            }
            /**
             * Show warn message.
             * @param {string} message - Message to show.
             */
            s.showWarnMessage = function (message) {
                s._showMessage(message, 'warn');
            }
            /**
             * Show error message.
             * @param {string} message - Message to show.
             */
            s.showErrorMessage = function (message) {
                s._showMessage(message, 'error');
            }
        });

})(angular, apeman);