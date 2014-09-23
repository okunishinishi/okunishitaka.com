/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('okServices')
        .service('blogApiService', function BlogApiService($http) {
            var s = this;

            s.list = function list(params) {
                return $http({
                    method: 'GET',
                    url: '/blogs/',
                    params: params
                });
            }
        });

})(angular);