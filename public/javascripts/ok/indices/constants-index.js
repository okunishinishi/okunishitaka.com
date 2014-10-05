/**
 * Constants index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('constantsIndex', function defineConstantsIndex($injector) {
            return {
                get codeConstant() { return $injector.get('codeConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get metaConstant() { return $injector.get('metaConstant'); },
                get partialConstant() { return $injector.get('partialConstant'); }
            }
        });
})(angular, apeman);