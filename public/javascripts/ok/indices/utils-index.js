/**
 * Utils index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('utilsIndex', function defineUtilsIndex($injector) {
            return {
                get canvasUtil() { return $injector.get('canvasUtil'); },
                get hashUtil() { return $injector.get('hashUtil'); },
                get mathUtil() { return $injector.get('mathUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get positionUtil() { return $injector.get('positionUtil'); },
                get urlUtil() { return $injector.get('urlUtil'); }
            };
        });
})(angular);