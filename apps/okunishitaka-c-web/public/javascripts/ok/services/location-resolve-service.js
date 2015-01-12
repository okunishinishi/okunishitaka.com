/**
 * @ngdoc object
 * @name locationResolveService
 * @description Location resolve service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService(apLocationResolveService) {
            var s = this;
            s.__proto__ = apLocationResolveService;
        });

})(angular);