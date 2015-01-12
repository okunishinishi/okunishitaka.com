/**
 * @ngdoc object
 * @name utilsIndex
 * @description Utils index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('utilsIndex', function defineUtilsIndex($injector) {
            return {
                get arrayUtil() { return $injector.get('arrayUtil'); },
                get hashUtil() { return $injector.get('hashUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get positionUtil() { return $injector.get('positionUtil'); },
                get stringUtil() { return $injector.get('stringUtil'); }
            };
        });
})(angular);