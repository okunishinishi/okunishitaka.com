/**
 * @ngdoc Service
 * @name blogTagApiService
 * @description BlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogTagApiService', function BlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

        });
})(angular);