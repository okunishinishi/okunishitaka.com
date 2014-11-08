/**
 * List data source for setting.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SettingListDatasource', function (ListDatasource, SettingEntity, settingApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    settingApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(SettingEntity.new);
                }
            });
        });

})(angular, apeman);