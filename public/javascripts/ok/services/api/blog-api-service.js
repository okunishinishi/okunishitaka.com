/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";
    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService(apiService, apiUrlConstant, urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

            /**
             * File a resource.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.one = function one(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url, callback);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.create = function create(data, callback) {
                var url = apiUrlConstant.BLOGS_POST;
                return apiService.post(url, data, callback);
            }

            /**
             * Update a resouce.
             * @param {string} id - Resource id.
             * @param {object} data - Data to update.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.update = function update(id, data, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_PUT_WITH_ID, {_id: id});
                return apiService.put(url, data, callback);
            }

            /**
             * Delete a resouce.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.delete = function del(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_PUT_WITH_ID, {_id: id});
                return apiService.delete(url, callback);
            }

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.BLOGS_GET;
                return apiService.get(url, params, callback);
            }

        });
})(angular);