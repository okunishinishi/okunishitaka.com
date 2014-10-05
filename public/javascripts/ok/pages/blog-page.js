/**
 * Page script for blog.
 * @requires angular
 * @requires apeman
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {

        })
        .factory('blogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return new ListDatasource({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    blogApiService.list(query)
                        .success(function (data, status) {
                            callback(null, data);
                        })
                        .error(function () {
                            callback(new Error('Failed to fetch'));
                        });
                }
            });
        })
        .controller('BlogCtrl', function ($scope, blogListDatasource) {

            var listDatasource = blogListDatasource;

            ap.copy({
                listDatasource: listDatasource,
                edit: function (blog) {

                }
            }, $scope);

            listDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope) {

            ap.copy({
                /**
                 * Load more data.
                 */
                more: function () {
                    $scope.listDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                /**
                 * Blog data.
                 */
                blogs: {
                    get: function () {
                        return $scope.listDatasource.data;
                    }
                }
            });
        })
        .controller('BlogDetailCtrl', function ($scope) {

        })
        .controller('BlogEditCtrl', function ($scope) {

        })
    ;

})(angular, apeman);