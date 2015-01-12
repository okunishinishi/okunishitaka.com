/**
 * @ngdoc Service
 * @name adminBlogTagApiService
 * @description AdminBlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogTagApiService', function AdminBlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);