/**
 * @ngdoc object
 * @name locationSearchService
 * @description Location search service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationSearchService', function LocationSearchService(apLocationSearchService) {
            var s = this;
            s.__proto__ = apLocationSearchService;

        });

})(angular);