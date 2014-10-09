/**
 * Work api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService($http, apiService, jsonUrlConstant) {
            var s = this;
            s.singleton = function singleton(callback) {
                var url = jsonUrlConstant.WORKS;
                return apiService.get(url, callback);

            }
        });

})(angular);