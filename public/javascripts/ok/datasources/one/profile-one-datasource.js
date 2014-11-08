/**
 * One data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileOneDatasource', function (OneDatasource, ProfileEntity, profileApiService) {
            return OneDatasource.define(
                /** @lends ProfileOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        profileApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        profileApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        profileApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        profileApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(ProfileEntity.new);
                    }
                }
            );
        });
});