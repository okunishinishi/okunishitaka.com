/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";
    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService(apiService) {
            var s = this;
            s.list = function list(params, callback) {
                return apiService.get('/blogs/', params, callback);
            }
        });
})(angular);