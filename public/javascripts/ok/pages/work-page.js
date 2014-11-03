/**
 * Page script for work.
 * @requires angular
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'work';
        })
        .factory('workListDatasource', function (ListDatasource, WorkEntity, workApiService) {
            return new ListDatasource({
                convert: function (data) {
                    return data.map(WorkEntity.new);
                },
                fetch: function (query, callback) {
                    workApiService.singleton(callback);
                }
            })
        })
        .directive('okWorkLink', function (partialUrlConstant, linkUrlConstant) {
            return {
                scope: {
                    href: '=okWorkHref',
                    title: '=okWorkTitle',
                    icon:'=okWorkIcon'
                },
                link: function (scope, elm, attr) {
                    scope.links = linkUrlConstant;
                    $(elm).addClass('work-link-container');
                },
                templateUrl: partialUrlConstant.WORK_LINK
            }
        })
        .controller('WorkCtrl', function ($scope, workListDatasource) {
            workListDatasource.load();
        })
        .controller('WorkListCtrl', function ($scope, workListDatasource) {
            ap.copy({
                hrefForWork: function (work) {
                    if (!work) {
                        return null;
                    }
                    var links = $scope.links;
                    return links[work.demo] || links[work.link] || links[work.repo];
                }
            }, $scope);
            Object.defineProperties($scope, {
                works: {
                    get: function () {
                        return workListDatasource.data;
                    }
                }

            });
        });

})(angular, apeman, jQuery);