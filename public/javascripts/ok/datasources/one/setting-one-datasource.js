/**
 * One data source for setting.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SettingOneDatasource', function (OneDatasource, SettingEntity, settingApiService) {
            return OneDatasource.define(
                /** @lends SettingOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        settingApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        settingApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        settingApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        settingApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(SettingEntity.new);
                    }
                }
            );
        });
});