/**
 * One data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkOneDatasource', function (OneDatasource, WorkEntity, workApiService) {
            return OneDatasource.define(
                /** @lends WorkOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        workApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        workApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        workApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        workApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });
});