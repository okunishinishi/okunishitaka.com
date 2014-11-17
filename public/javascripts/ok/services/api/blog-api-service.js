/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = apiUrlConstant.API_BLOGS_GET;
                return apiService.get(url, params);
            }

            /**
             * File a resource.
             * @param {string} id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(id) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = apiUrlConstant.API_BLOGS_POST;
                return apiService.post(url, data);
            }

            /**
             * Update a resouce.
             * @param {string} id - Resource id.
             * @param {object} data - Data to update.
             * @returns {Promise} - Deferred promise.
             */
            s.update = function update(id, data) {
                    var url = formatUrl(apiUrlConstant.API_BLOGS_PUT_WITH_ID, {_id: id});
                    return apiService.put(url, data);
            }

            /**
             * Destroy a resouce.
             * @param {string} id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(id) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_DELETE_WITH_ID, {_id: id});
                return apiService.delete(url);
            }

        });
})(angular);