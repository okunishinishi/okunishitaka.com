/**
 * @ngdoc Service
 * @name profileApiService
 * @description Profile api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.API_PROFILE_GET, {_id: _id});
                return apiService.get(url);
            };

        });
})(angular);