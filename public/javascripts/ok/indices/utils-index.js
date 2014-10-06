/**
 * Utils index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('utilsIndex', function defineUtilsIndex($injector) {
            return {
                get objectUtil() { return $injector.get('objectUtil'); },
                get urlUtil() { return $injector.get('urlUtil'); }
            }
        });
})(angular, apeman);