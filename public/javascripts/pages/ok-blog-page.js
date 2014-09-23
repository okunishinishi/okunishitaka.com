/**
 * Page script for blog.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('okBlogPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('BlogCtrl', function ($scope, Blog, blogApiService) {

            ap.copy({
                skip: 0,
                limit: 10,
                blogs: [],
                load: function (callback) {
                    blogApiService
                        .list({
                            _skip: $scope.skip,
                            _limit: $scope.limit
                        })
                        .success(function (data, status) {
                            $scope.blogs = data.map(function (data) {
                                return new Blog(data);
                            });
                        });
                },
                reload: function (callback) {
                    $scope.load(callback);
                }
            }, $scope);

            $scope.load(function () {

            });
        });

})(angular, apeman);