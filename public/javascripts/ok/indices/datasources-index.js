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
                get ListDatasource() { return $injector.get('ListDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); }
            };
        });
})(angular);