/**
 * Work api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.API_WORKS_GET;
                return apiService.get(url, params, callback);
            }

        });
})(angular);