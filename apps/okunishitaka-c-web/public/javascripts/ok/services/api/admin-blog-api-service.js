/**
 * @ngdoc Service
 * @name adminBlogApiService
 * @description AdminBlog api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogApiService', function AdminBlogApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET_WITH_ID, {_id: _id});
                return apiService.get(url);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Update a resource.
             * @param {string} _id - Resource id.
             * @param {object} data - Data to update.
             * @returns {Promise} - Deferred promise.
             */
            s.update = function update(_id, data) {
                    var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_PUT_WITH_ID, {_id: _id});
                    return apiService.put(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);