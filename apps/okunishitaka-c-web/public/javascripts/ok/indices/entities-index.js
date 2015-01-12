/**
 * @ngdoc object
 * @name entitiesIndex
 * @description Entities index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get BlogTagEntity() { return $injector.get('BlogTagEntity'); },
                get Entity() { return $injector.get('Entity'); },
                get ProfileEntity() { return $injector.get('ProfileEntity'); },
                get WorkEntity() { return $injector.get('WorkEntity'); }
            };
        });
})(angular);