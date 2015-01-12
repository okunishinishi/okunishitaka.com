/**
 * @ngdoc object
 * @name locationChangeService
 * @description Location change service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationChangeService', function LocationChangeService(apLocationChangeService) {
            var s = this;
            s.__proto__ = apLocationChangeService;

        });

})(angular);