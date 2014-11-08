/**
 * Datasources index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('datasourcesIndex', function defineDatasourcesIndex($injector) {
            return {
                get BlogListDataSource() { return $injector.get('BlogListDataSource'); },
                get Datasource() { return $injector.get('Datasource'); },
                get ListDatasource() { return $injector.get('ListDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); },
                get ProfileListDataSource() { return $injector.get('ProfileListDataSource'); },
                get SettingListDataSource() { return $injector.get('SettingListDataSource'); },
                get WorkListDataSource() { return $injector.get('WorkListDataSource'); }
            };
        });
})(angular);