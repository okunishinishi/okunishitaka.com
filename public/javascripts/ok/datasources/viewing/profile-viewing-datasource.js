/**
 * @ngdoc object
 * @name ProfileViewingDatasource
 * @description View data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileViewingDatasource', function (ViewingDatasource, ProfileEntity, profileApiService) {
            return ViewingDatasource.define(
                /** @lends ProfileViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        profileApiService.singleton(callback);
                    },
                    _parseData: function (data) {
                        return ProfileEntity.new(data);
                    }
                }
            );
        });

})(angular, apeman);