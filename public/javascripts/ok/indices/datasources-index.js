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
                get WorkListDatasource() { return $injector.get('WorkListDatasource'); },
                get BlogListingDatasource() { return $injector.get('BlogListingDatasource'); },
                get ListingDatasource() { return $injector.get('ListingDatasource'); },
                get WorkListingDatasource() { return $injector.get('WorkListingDatasource'); },
                get BlogOneDatasource() { return $injector.get('BlogOneDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); },
                get ProfileSingletonDatasource() { return $injector.get('ProfileSingletonDatasource'); },
                get SingletonDatasource() { return $injector.get('SingletonDatasource'); }
            };
        });
})(angular);