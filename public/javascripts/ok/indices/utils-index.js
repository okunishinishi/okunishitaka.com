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
                get canvasUtil() { return $injector.get('canvasUtil'); },
                get mathUtil() { return $injector.get('mathUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get positionUtil() { return $injector.get('positionUtil'); },
                get urlUtil() { return $injector.get('urlUtil'); }
            }
        });
})(angular, apeman);