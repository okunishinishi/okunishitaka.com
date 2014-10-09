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

            /**
             * Get the singleton profile data.
             * @param {function} callback - Callback when done.
             */
            s.singleton = function singleton(callback) {
                var url = jsonUrlConstant.PROFILE;
                return apiService.get(url, callback);

            }
        });

})(angular);