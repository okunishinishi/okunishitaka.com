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

            s.one = function one(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url, callback);
            };

            s.create = function create(data, callback) {
                var url = apiUrlConstant.BLOGS_POST;
                return apiService.post(url, data, callback);
            }

            s.update = function update(id, data, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_PUT_WITH_ID, {_id: id});
                return apiService.update(url, data, callback);
            }

            s.delete = function del(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_PUT_WITH_ID, {_id: id});
                return apiService.delete(url, callback);
            }

            s.list = function list(params, callback) {
                var url = apiUrlConstant.BLOGS_GET;
                return apiService.get(url, params, callback);
            }

        });
})(angular);