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
                get Datasource() { return $injector.get('Datasource'); },
                get BlogListDatasource() { return $injector.get('BlogListDatasource'); },
                get ListDatasource() { return $injector.get('ListDatasource'); },
                get ProfileListDatasource() { return $injector.get('ProfileListDatasource'); },
                get SettingListDatasource() { return $injector.get('SettingListDatasource'); },
                get WorkListDatasource() { return $injector.get('WorkListDatasource'); },
                get BlogOneDatasource() { return $injector.get('BlogOneDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); },
                get ProfileOneDatasource() { return $injector.get('ProfileOneDatasource'); },
                get SettingOneDatasource() { return $injector.get('SettingOneDatasource'); },
                get WorkOneDatasource() { return $injector.get('WorkOneDatasource'); }
            };
        });
})(angular);