/**
 * List data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListDatasource', function (ListDatasource, WorkEntity, workApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    workApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(WorkEntity.new);
                }
            });
        });

})(angular, apeman);