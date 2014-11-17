/**
 * @ngdoc module
 * @module ok.blogPage
 * @description Page script for blog.
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
        .controller('BlogCtrl', function ($scope,blogApiService) {

            function applyHash(hash) {
                var id = (hash || '').split('-').pop()
            }

            $scope.$watch('hash()', function () {
                applyHash($scope.hash());
            });


            $scope.condition = {
                _sort: '_at',
                _reverse: true,
                _limit: 20,
                _skip: 0
            };
            $scope.blogs = [];
            $scope.hasMore = true;
            $scope.loadMore = function () {
                load();
            }

            function load() {
                blogApiService.list($scope.condition)
                    .then(function resolved(data) {
                        $scope.blogs = $scope.blogs.concat(data);
                        $scope.hasMore = data.length >= $scope.condition._limit;
                    })
                    .then(function rejected(err) {


                    });
            }


            load();
        })
        .controller('BlogListCtrl', function ($scope) {
        })
        .controller('BlogAsideCtrl', function ($scope) {
        })
    ;

})(angular, apeman);