/**
 * ok indices module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ]);
})(angular);

/**
 * Constants index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('constantsIndex', function defineConstantsIndex($injector) {
            return {
                get appConstant() { return $injector.get('appConstant'); },
                get codeConstant() { return $injector.get('codeConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get apiUrlConstant() { return $injector.get('apiUrlConstant'); },
                get imageUrlConstant() { return $injector.get('imageUrlConstant'); },
                get jsonUrlConstant() { return $injector.get('jsonUrlConstant'); },
                get linkUrlConstant() { return $injector.get('linkUrlConstant'); },
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); }
            };
        });
})(angular);
/**
 * Datasources index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('datasourcesIndex', function defineDatasourcesIndex($injector) {
            return {
                
            };
        });
})(angular);
/**
 * Entities index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get Entity() { return $injector.get('Entity'); },
                get ProfileEntity() { return $injector.get('ProfileEntity'); },
                get SettingEntity() { return $injector.get('SettingEntity'); },
                get WorkEntity() { return $injector.get('WorkEntity'); }
            };
        });
})(angular);
/**
 * Errors index.
 * @requires angular
 * @requires apeman
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
/**
 * Templates index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get adminAdminBlogEditorSectionHtmlTemplate() { return $injector.get('adminAdminBlogEditorSectionHtmlTemplate'); },
                get adminAdminBlogListSectionHtmlTemplate() { return $injector.get('adminAdminBlogListSectionHtmlTemplate'); },
                get adminAdminEditorSectionHtmlTemplate() { return $injector.get('adminAdminEditorSectionHtmlTemplate'); },
                get adminAdminHeaderHtmlTemplate() { return $injector.get('adminAdminHeaderHtmlTemplate'); },
                get blogBlogAsideContentHtmlTemplate() { return $injector.get('blogBlogAsideContentHtmlTemplate'); },
                get blogBlogDetailSectionHtmlTemplate() { return $injector.get('blogBlogDetailSectionHtmlTemplate'); },
                get blogBlogEditEditorSectionHtmlTemplate() { return $injector.get('blogBlogEditEditorSectionHtmlTemplate'); },
                get blogBlogEditListSectionHtmlTemplate() { return $injector.get('blogBlogEditListSectionHtmlTemplate'); },
                get blogBlogEditSectionContentHtmlTemplate() { return $injector.get('blogBlogEditSectionContentHtmlTemplate'); },
                get blogBlogEditSectionHtmlTemplate() { return $injector.get('blogBlogEditSectionHtmlTemplate'); },
                get blogBlogListSectionContentHtmlTemplate() { return $injector.get('blogBlogListSectionContentHtmlTemplate'); },
                get blogBlogListSectionHtmlTemplate() { return $injector.get('blogBlogListSectionHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
                get footerHtmlTemplate() { return $injector.get('footerHtmlTemplate'); },
                get headerHtmlTemplate() { return $injector.get('headerHtmlTemplate'); },
                get indexIndexContentTitleHtmlTemplate() { return $injector.get('indexIndexContentTitleHtmlTemplate'); },
                get indexIndexMenuSectionHtmlTemplate() { return $injector.get('indexIndexMenuSectionHtmlTemplate'); },
                get indexIndexSeeMoreButtonHtmlTemplate() { return $injector.get('indexIndexSeeMoreButtonHtmlTemplate'); },
                get indexIndexTitleHtmlTemplate() { return $injector.get('indexIndexTitleHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get profileProfileListHtmlTemplate() { return $injector.get('profileProfileListHtmlTemplate'); },
                get profileProfileTableHtmlTemplate() { return $injector.get('profileProfileTableHtmlTemplate'); },
                get socialHtmlTemplate() { return $injector.get('socialHtmlTemplate'); },
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); },
                get trackHtmlTemplate() { return $injector.get('trackHtmlTemplate'); },
                get workWorkLinkHtmlTemplate() { return $injector.get('workWorkLinkHtmlTemplate'); },
                get workWorkListHtmlTemplate() { return $injector.get('workWorkListHtmlTemplate'); }
            };
        });
})(angular);
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
