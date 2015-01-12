/**
 * @ngdoc module
 * @module ok.pages
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.pages', [
            
        ]);
})(angular);

/**
 * @ngdoc module
 * @module ok.indexPage
 * @description Page script for index.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'index';
        })
        .directive('okIndexContentTitle', function (partialUrlConstant) {
            return {
                scope: {
                    title: '=okIndexContentTitle',
                    subtitle: '=okContentSubtitle'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('content-section-title-container');
                },
                templateUrl: partialUrlConstant.INDEX_CONTENT_TITLE
            }
        })
        .directive('okIndexSeeMore', function (partialUrlConstant) {
            return {
                scope: {
                    href: '=okIndexSeeMore'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('see-more-button-container');
                },
                templateUrl: partialUrlConstant.INDEX_SEE_MORE_BUTTON
            }
        })
        .controller('IndexCtrl', function defineIndexCtrl($scope) {

        })
        .controller('IndexProfileCtrl', function ($scope) {
        })
        .controller('IndexBlogCtrl', function ($scope) {
        })
        .controller('IndexWorkCtrl', function ($scope) {
        });

})(angular);
/**
 * @ngdoc module
 * @module ok.page
 * @description Abstract page.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.page', [
            'ngSanitize', // ng-bind-html requires ng sanitize.
            'ok.indices',
            'ok.constants',
            'ok.components',
            'ok.directives',
            'ok.entities',
            'ok.errors',
            'ok.services',
            'ok.utils'
        ])
        .factory('global', [
            'constantsIndex',
            'servicesIndex',
            'utilsIndex',
            function defineGlobal(cn, sv, ut) {
                var objectUtil = ut.objectUtil,
                    lang = sv.langDetectService.detectLang(),
                    locale = sv.localeStoreService.localeForLang(lang);
                return {
                    api: cn.apiUrlConstant,
                    app: cn.appConstant,
                    codes: cn.codeConstant,
                    copy: objectUtil.copy.bind(objectUtil),
                    icons: cn.iconConstant,
                    images: cn.imageUrlConstant,
                    json: cn.jsonUrlConstant,
                    links: cn.linkUrlConstant,
                    locale: locale,
                    l: locale, //Alias of locale.
                    pages: cn.pageUrlConstant,
                    partials: cn.partialUrlConstant,
                    url: function (url) {
                        return sv.locationResolveService.resolveUrl(url);
                    },
                    changeToTopPage: function () {
                        sv.locationChangeService.changeToTopPage();
                    },
                    values: objectUtil.keyForValue.bind(objectUtil),
                    zip: cn.zipUrlConstant
                }
            }
        ])
        .factory('copy', function defineCopy(global) {
            return global.copy;
        })
        .factory('l', function defineL(global) {
            return global.locale;
        })
        .run(function ($http, global) {
            $http.defaults.headers.common['x-lang'] = global.lang;
        })
        .run(function exportsGlobal($rootScope, global, copy) {
            // Exports all global values to root scope.
            copy(global, $rootScope);
        })
        .run(function cacheTemplates(templatesIndex, templateCacheService) {
            Object.keys(templatesIndex).forEach(function (key) {
                var template = templatesIndex[key];
                templateCacheService.register(template.name, template.content);
            });
        })
        .controller('HeadCtrl', function HeadControl($scope) {

        })
        .controller('BodyCtrl', function BodyControl($scope) {

        })
        .controller('HeaderCtrl', function HeaderControl($scope) {

        })
        .controller('AsideCtrl', function ($scope) {

        })
        .controller('FooterCtrl', function FooterControl($scope) {

        });


})(angular);
/**
 * @ngdoc module
 * @module ok.profilePage
 * @description Page script for profile.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'profile';
        })
        .controller('ProfileCtrl', function defineProfileCtrl($scope) {

        });

})(angular);
