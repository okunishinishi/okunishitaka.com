/**
 * Page script for work.
 * @requires angular
 */

(function (ng, ap) {
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
        .controller('WorkCtrl', function ($scope, workListDatasource) {
            workListDatasource.load();
        })
        .controller('WorkListCtrl', function ($scope, workListDatasource) {
            Object.defineProperties($scope, {
                works: {
                    get: function () {
                        return workListDatasource.data;
                    }
                }
            });
        });

})(angular, apeman);