/**
 * Editing data source for profile.
 * @requires angular
 * @requires apeman
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