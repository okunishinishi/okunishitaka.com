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
        .factory('blogListDatasource', function (BlogListDatasource) {
            return new BlogListDatasource({});
        })
        .controller('BlogCtrl', function ($scope, blogListDatasource) {
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

            blogListDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope, blogListDatasource) {
        })
        .controller('BlogAsideCtrl', function ($scope, blogListDatasource) {
        })
    ;

})(angular, apeman);