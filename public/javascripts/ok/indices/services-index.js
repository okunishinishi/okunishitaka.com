/**
 * Services index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('servicesIndex', function defineServicesIndex($injector) {
            return {
                get apiService() { return $injector.get('apiService'); },
                get blogApiService() { return $injector.get('blogApiService'); },
                get profileApiService() { return $injector.get('profileApiService'); },
                get settingApiService() { return $injector.get('settingApiService'); },
                get workApiService() { return $injector.get('workApiService'); },
                get browserDetectService() { return $injector.get('browserDetectService'); },
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get confirmMessageService() { return $injector.get('confirmMessageService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localeLoadService() { return $injector.get('localeLoadService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get markdownRenderService() { return $injector.get('markdownRenderService'); },
                get templateCacheService() { return $injector.get('templateCacheService'); },
                get toastMessageService() { return $injector.get('toastMessageService'); },
                get urlFormatService() { return $injector.get('urlFormatService'); }
            };
        });
})(angular);