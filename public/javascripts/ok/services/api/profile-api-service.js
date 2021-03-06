/**
 * Profile api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * Get the singleton data.
             * @returns {Promise} - Deferred promise.
             */
            s.singleton = function singleton() {
                var url = apiUrlConstant.API_PROFILES_GET;
                return apiService.get(url);
            }

        });
})(angular);