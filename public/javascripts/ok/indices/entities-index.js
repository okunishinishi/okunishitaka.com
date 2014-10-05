/**
 * Entities index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get Entity() { return $injector.get('Entity'); },
                get SettingEntity() { return $injector.get('SettingEntity'); }
            }
        });
})(angular, apeman);