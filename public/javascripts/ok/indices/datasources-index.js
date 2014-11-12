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
                get BlogListingDatasource() { return $injector.get('BlogListingDatasource'); },
                get ListingDatasource() { return $injector.get('ListingDatasource'); },
                get WorkListingDatasource() { return $injector.get('WorkListingDatasource'); },
                get BlogOneDatasource() { return $injector.get('BlogOneDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); },
                get BlogViewingDatasource() { return $injector.get('BlogViewingDatasource'); },
                get ProfileViewingDatasource() { return $injector.get('ProfileViewingDatasource'); },
                get ViewingDatasource() { return $injector.get('ViewingDatasource'); }
            };
        });
})(angular);