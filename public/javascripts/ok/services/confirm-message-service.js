/**
 * Confirm message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('confirmMessageService', function ConfirmMessageService($window) {
            var s = this;
            s.confirm = function (msg) {
                return $window.confirm(msg);
            }
        });

})(angular, apeman);