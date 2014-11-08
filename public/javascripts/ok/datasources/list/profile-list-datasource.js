/**
 * List data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileListDatasource', function (ListDatasource, ProfileEntity, profileApiService) {
            return ListDatasource.define(
                /** @lends ProfileListDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        query._sort = '_at';
                        query._reverse = 'true';
                        profileApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(ProfileEntity.new);
                    }
                }
            );
        });

})(angular, apeman);