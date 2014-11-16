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
        .factory('datasources', function (BlogViewingDatasource, BlogListingDatasource) {
            return {
                viewing: new BlogViewingDatasource({}),
                listing: new BlogListingDatasource({
                    condition: {
                        _sort: '_at',
                        _reverse: true

                    }
                })
            }

        })
        .controller('BlogCtrl', function ($scope,
                                          datasources) {
            var listing = datasources.listing,
                viewing = datasources.viewing;
            ap.copy({
                listing: listing,
                viewing: viewing,
                isDetailed: function () {
                    return !!(listing.condition._id);
                }
            }, $scope);

            function applyHash(hash) {
                viewing
                    .init({
                        id: (hash || '').split('-').pop()
                    })
                    .load(function () {

                    });
            }

            listing.load();

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