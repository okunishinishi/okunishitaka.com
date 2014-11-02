/**
 * Page script for index.
 * @requires angular
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'index';
        })
        .controller('IndexCtrl', function ($scope) {

        })
        .directive('okContentTitle', function (partialUrlConstant) {
            return {
                scope: {
                    title: '=okContentTitle',
                    subtitle: '=okContentSubtitle'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('content-section-title-container');
                },
                templateUrl: partialUrlConstant.INDEX_CONTENT_TITLE
            }
        })
        .directive('okSeeMore', function (partialUrlConstant) {
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
        .controller('IndexProfileCtrl', function ($scope) {

            var images = $scope.images;
            $scope.thumbnails = [
                images.WORKS_CHESS_THUMBNAIL,
                images.WORKS_CSS_GALLERY_THUMBNAIL,
                images.WORKS_DOC_GALLERY_THUMBNAIL,
                images.WORKS_MOCK_MONKEY_THUMBNAIL,
                images.WORKS_PLANING_PORKER_THUMBNAIL,
                images.WORKS_SHOT_THUMBNAIL,
                images.WORKS_OTHERO_THUMBNAIL,
                images.WORKS_TYPE_THUMBNAIL
            ]
        })
        .controller('IndexBlogCtrl', function ($scope) {

        })
        .controller('IndexWorkCtrl', function ($scope, workApiService, WorkEntity) {
            workApiService.singleton(function (err, data) {
                $scope.works = data.map(WorkEntity.new);
            });
        })

    ;

})(angular, apeman, jQuery);