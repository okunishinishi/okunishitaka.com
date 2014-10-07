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
                get appConstant() { return $injector.get('appConstant'); },
                get codeConstant() { return $injector.get('codeConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get apiUrlConstant() { return $injector.get('apiUrlConstant'); },
                get linkUrlConstant() { return $injector.get('linkUrlConstant'); },
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); }
            }
        });
})(angular, apeman);