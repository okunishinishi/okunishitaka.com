/**
 * Singleton data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileSingletonDatasource', function (SingletonDatasource, ProfileEntity, profileApiService) {
            return SingletonDatasource.define(
                /** @lends ProfileSingletonDatasource.prototype */
                {
                    _singletonRequest: function (callback) {
                        profileApiService.singleton(callback);
                    },
                    _parseData: function (data) {
                        return ProfileEntity.new(data);
                    }
                }
            );
        });
})(angular, apeman);