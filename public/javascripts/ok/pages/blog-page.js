/**
 * Page script for blog.
 * @requires angular
 * @retuires apeman
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'blog';
        })
        .factory('blogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return new ListDatasource({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    blogApiService.list(query, callback);
                }
            });
        })
        .controller('BlogCtrl', function ($scope, blogListDatasource) {
            blogListDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope, blogListDatasource) {
            ap.copy({
                /**
                 * Load more data.
                 */
                more: function () {
                    blogListDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });
        })
        .controller('BlogAsideCtrl', function ($scope, blogListDatasource) {
            ap.copy({
                more: function () {
                    blogListDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });
        })
    ;

})(angular, apeman);