/**
 * ok indices module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.datasources',
            'ok.entities',
            'ok.errors',
            'ok.logics',
            'ok.services',
            'ok.utils'
        ]);
})(angular);

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
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); }
            }
        });
})(angular, apeman);
/**
 * Datasources index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('datasourcesIndex', function defineDatasourcesIndex($injector) {
            return {
                get Datasource() { return $injector.get('Datasource'); },
                get ListDatasource() { return $injector.get('ListDatasource'); },
                get OneDatasource() { return $injector.get('OneDatasource'); }
            }
        });
})(angular, apeman);
/**
 * Entities index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get Entity() { return $injector.get('Entity'); },
                get SettingEntity() { return $injector.get('SettingEntity'); }
            }
        });
})(angular, apeman);
/**
 * Errors index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('errorsIndex', function defineErrorsIndex($injector) {
            return {
                get AppApiError() { return $injector.get('AppApiError'); },
                get AppError() { return $injector.get('AppError'); }
            }
        });
})(angular, apeman);
/**
 * Logics index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('logicsIndex', function defineLogicsIndex($injector) {
            return {
                get errorCodeLogic() { return $injector.get('errorCodeLogic'); },
                get multiLangUrlLogic() { return $injector.get('multiLangUrlLogic'); },
                get pageTitleLogic() { return $injector.get('pageTitleLogic'); }
            }
        });
})(angular, apeman);
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