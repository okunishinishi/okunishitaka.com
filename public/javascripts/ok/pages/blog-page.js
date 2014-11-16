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
        .factory('blogListingDatasource', function (BlogListingDatasource) {
            return new BlogListingDatasource({
                condition: {
                    _sort: '_at',
                    _reverse: true

                }
            });
        })
        .controller('BlogCtrl', function ($scope,
                                          global,
                                          blogListingDatasource) {
            ap.copy({
                listing: blogListingDatasource,
                isDetailed: function () {
                    return !!(blogListingDatasource.condition._id);
                }
            }, $scope);

            function applyHash(hash) {
                console.log('hash', hash);
                if (hash) {
                    blogListingDatasource.condition._id = hash.split('-').pop();
                } else {
                    delete blogListingDatasource.condition._id;
                }
                blogListingDatasource.load(function () {
                });
            }

            $scope.$watch('hash()', function () {
                applyHash($scope.hash());
            });

        })
        .controller('BlogListCtrl', function ($scope) {

        })
        .controller('BlogAsideCtrl', function ($scope) {
        })
    ;

})(angular, apeman);