/**
 * Profile api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

            /**
             * Get the singleton data.
             * @param {function} callback - Callback when done.
             */
            s.singleton = function singleton(callback) {
                var url = apiUrlConstant.PROFILES_GET;
                return apiService.get(url, callback);
            }

        });
})(angular);