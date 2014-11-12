/**
 * List data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListingDatasource', function (ListingDatasource, WorkEntity, workApiService) {
            return ListingDatasource.define(
                /** @lends WorkListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        workApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });

})(angular, apeman);