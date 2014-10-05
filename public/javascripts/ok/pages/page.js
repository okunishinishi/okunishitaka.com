/**
 * okunishitaka.com abstract page script.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.page', [
            'apeman',
            'ok.constants',
            'ok.datasources',
            'ok.entities',
            'ok.services',
            'ok.utils'
        ])
        .factory('global', function global(metaConstant, partialConstant, pageTitleLogic, langDetectService, localeLoadService, locationChangeService, locationResolveService) {
            var lang = langDetectService.detectLang(),
                locale = localeLoadService.localeForLang(lang);
            return {
                meta: metaConstant,
                lang: lang,
                locale: locale,
                get l() {
                    //alias of locale
                    return locale;
                },
                title: function (page) {
                    return pageTitleLogic.tilteForPage(locale, page);
                },
                partials: partialConstant,
                goTopPage: function () {
                    locationChangeService.changeToTopPage();
                },
                url: function (url) {
                    return locationResolveService.resolveUrl(url);
                },
                scrollTo: function (id) {
                    locationChangeService.scrollToHash(id);
                }
            }
        })
        .run(function exportsGlobal($rootScope, global) {
            ap.copy(global, $rootScope);
        })
        .controller('HeadControl', function ($scope) {
            var l = $scope.l;
            $scope.navItem = [
                {
                    href: '/',
                    title: l.pageNames.INDEX
                },
                {
                    href: '/blog',
                    title: l.pageNames.BLOG
                },
                {
                    href: '/work',
                    title: l.pageNames.WORK
                }
            ]
        })
        .controller('FootControl', function ($scope) {

        });
})(angular, apeman);
