/**
 * @ngdoc object
 * @name ProfileEditingDatasource
 * @description Editing data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileEditingDatasource', function (EditingDatasource, ProfileEntity, profileApiService) {
            return EditingDatasource.define(
                /** @lends ProfileEditingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        profileApiService.singleton(callback);
                    },
                    _updateRequest: function (data, callback) {
                        profileApiService.save(data, callback);
                    },
                }
            );
        });
})(angular, apeman);