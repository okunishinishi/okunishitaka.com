/**
 * @ngdoc module
 * @module ok.indices
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.directives',
            'ok.entities',
            'ok.errors',
            'ok.filters',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc object
 * @name constantsIndex
 * @description Constants index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('constantsIndex', function defineConstantsIndex($injector) {
            return {
                get appConstant() { return $injector.get('appConstant'); },
                get codeConstant() { return $injector.get('codeConstant'); },
                get iconConstant() { return $injector.get('iconConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get apiUrlConstant() { return $injector.get('apiUrlConstant'); },
                get imageUrlConstant() { return $injector.get('imageUrlConstant'); },
                get jsonUrlConstant() { return $injector.get('jsonUrlConstant'); },
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); },
                get zipUrlConstant() { return $injector.get('zipUrlConstant'); },
                get viewConstant() { return $injector.get('viewConstant'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name entitiesIndex
 * @description Entities index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get BlogTagEntity() { return $injector.get('BlogTagEntity'); },
                get Entity() { return $injector.get('Entity'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name errorsIndex
 * @description Errors index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('errorsIndex', function defineErrorsIndex($injector) {
            return {
                get AppApiError() { return $injector.get('AppApiError'); },
                get AppError() { return $injector.get('AppError'); }
            };
        });
})(angular);
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
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get errorHandleService() { return $injector.get('errorHandleService'); },
                get eventEmitService() { return $injector.get('eventEmitService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localStorageService() { return $injector.get('localStorageService'); },
                get localeStoreService() { return $injector.get('localeStoreService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get locationSearchService() { return $injector.get('locationSearchService'); },
                get templateCacheService() { return $injector.get('templateCacheService'); },
                get toastMessageService() { return $injector.get('toastMessageService'); },
                get urlFormatService() { return $injector.get('urlFormatService'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name templatesIndex
 * @description Templates index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get coverHtmlTemplate() { return $injector.get('coverHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); }
            };
        });
})(angular);
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
                get objectUtil() { return $injector.get('objectUtil'); },
                get stringUtil() { return $injector.get('stringUtil'); }
            };
        });
})(angular);
