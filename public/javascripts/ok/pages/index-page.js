/**
 * Page script for index.
 * @requires angular
 */

(function (ng) {
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
        .directive('okSeeMore', function () {
            return {
                scope:{
                    href:'=okSeeMore'
                },
                template: $('#see-more-button-template').html()
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

})(angular);