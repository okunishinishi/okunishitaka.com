/**
 * @ngdoc Service
 * @name workApiService
 * @description Work api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_WORK_GET, params);
                return apiService.get(url, params);
            };

        });
})(angular);