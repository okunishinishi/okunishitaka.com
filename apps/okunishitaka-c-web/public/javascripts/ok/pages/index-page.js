/**
 * @ngdoc module
 * @module ok.indexPage
 * @description Page script for index.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'index';
        })
        .directive('okIndexContentTitle', function (partialUrlConstant) {
            return {
                scope: {
                    title: '=okIndexContentTitle',
                    subtitle: '=okContentSubtitle'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('content-section-title-container');
                },
                templateUrl: partialUrlConstant.INDEX_CONTENT_TITLE
            }
        })
        .directive('okIndexSeeMore', function (partialUrlConstant) {
            return {
                scope: {
                    href: '=okSeeMore'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('see-more-button-container');
                },
                templateUrl: partialUrlConstant.INDEX_SEE_MORE_BUTTON
            }
        })
        .controller('IndexCtrl', function defineIndexCtrl($scope) {

        })
        .controller('IndexProfileCtrl', function ($scope) {
        })
        .controller('IndexBlogCtrl', function ($scope) {
        })
        .controller('IndexWorkCtrl', function ($scope) {
        });

})(angular);