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
        .controller('BlogCtrl', function ($scope, BlogListingDatasource) {
            var list = new BlogListingDatasource({
                _sort: '_at',
                _revert: true
            });

            ap.copy({
                list: list
            }, $scope);

            list.load();
        })
        .controller('BlogListCtrl', function ($scope) {

        })
        .controller('BlogAsideCtrl', function ($scope) {
        })
    ;

})(angular, apeman);