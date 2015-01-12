/**
 * @ngdoc module
 * @module ok.workPage
 * @description Page script for work.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'work';
        })
        .directive('okWorkLink', function (partialUrlConstant, linkUrlConstant) {
            return {
                scope: {
                    href: '=okWorkHref',
                    title: '=okWorkTitle',
                    icon: '=okWorkIcon'
                },
                link: function (scope, elm, attr) {
                    scope.links = linkUrlConstant;
                    $(elm).addClass('work-link-container');
                },
                templateUrl: partialUrlConstant.WORK_LINK
            }
        })

        .controller('WorkCtrl', function defineWorkCtrl($scope,
                                                        workApiService,
                                                        errorHandleService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load() {
                $scope.loading = true;
                workApiService.list({})
                    .then(function (works) {
                        $scope.works = works;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            load();

            $scope.hrefForWork = function (work) {
                if (!work) {
                    return null;
                }
                var links = $scope.links;
                return links[work.demo] || links[work.link] || links[work.repo];
            };
        })

})(angular);