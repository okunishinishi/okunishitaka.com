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
                get BlogDestroyingDatasource() { return $injector.get('BlogDestroyingDatasource'); },
                get DestroyingDatasource() { return $injector.get('DestroyingDatasource'); },
                get BlogEditingDatasource() { return $injector.get('BlogEditingDatasource'); },
                get EditingDatasource() { return $injector.get('EditingDatasource'); },
                get ProfileEditingDatasource() { return $injector.get('ProfileEditingDatasource'); },
                get BlogListingDatasource() { return $injector.get('BlogListingDatasource'); },
                get ListingDatasource() { return $injector.get('ListingDatasource'); },
                get WorkListingDatasource() { return $injector.get('WorkListingDatasource'); },
                get BlogViewingDatasource() { return $injector.get('BlogViewingDatasource'); },
                get ProfileViewingDatasource() { return $injector.get('ProfileViewingDatasource'); },
                get ViewingDatasource() { return $injector.get('ViewingDatasource'); }
            };
        });
})(angular);