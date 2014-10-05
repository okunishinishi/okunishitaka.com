/**
 * Services index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('servicesIndex', function defineServicesIndex($injector) {
            return {
                get apiService() { return $injector.get('apiService'); },
                get blogApiService() { return $injector.get('blogApiService'); },
                get settingApiService() { return $injector.get('settingApiService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localeLoadService() { return $injector.get('localeLoadService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); }
            }
        });
})(angular, apeman);