/**
 * @ngdoc object
 * @name localStorageService
 * @description Local storage service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localStorageService', function LocalStorageService(apLocalStorageService) {
            var s = this;
            s.__proto__ = apLocalStorageService;

        });

})(angular);