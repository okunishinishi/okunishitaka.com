/**
 * @ngdoc object
 * @name servicesIndex
 * @description Services index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('servicesIndex', function defineServicesIndex($injector) {
            return {
                get adminBlogApiService() { return $injector.get('adminBlogApiService'); },
                get adminBlogTagApiService() { return $injector.get('adminBlogTagApiService'); },
                get apiService() { return $injector.get('apiService'); },
                get blogApiService() { return $injector.get('blogApiService'); },
                get blogTagApiService() { return $injector.get('blogTagApiService'); },
                get profileApiService() { return $injector.get('profileApiService'); },
                get workApiService() { return $injector.get('workApiService'); },
                get blogSaveService() { return $injector.get('blogSaveService'); },
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get errorHandleService() { return $injector.get('errorHandleService'); },
                get eventEmitService() { return $injector.get('eventEmitService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localStorageService() { return $injector.get('localStorageService'); },
                get localeStoreService() { return $injector.get('localeStoreService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get locationSearchService() { return $injector.get('locationSearchService'); },
                get markdownRenderService() { return $injector.get('markdownRenderService'); },
                get templateCacheService() { return $injector.get('templateCacheService'); },
                get toastMessageService() { return $injector.get('toastMessageService'); },
                get urlFormatService() { return $injector.get('urlFormatService'); }
            };
        });
})(angular);