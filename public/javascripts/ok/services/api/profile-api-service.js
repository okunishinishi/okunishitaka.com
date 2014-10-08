/**
 * Profile api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService($http, apiService, jsonUrlConstant) {
            var s = this;

            s.singleton = function singleton(callback) {
                var url = jsonUrlConstant.PROFILE;
                return apiService.get(url, callback);

            }
        });

})(angular);