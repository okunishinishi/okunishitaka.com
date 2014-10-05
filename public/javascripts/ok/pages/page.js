/**
 * okunishitaka.com abstract page script.
 * @requires angular
 */

(function (ng) {
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
        .run(function meta($rootScope, metaConstant) {
            $rootScope.meta = metaConstant;
        })
        .run(function locale($rootScope, langDetectService, localeLoadService) {
            var lang = langDetectService.detectLang();
            $rootScope.l = localeLoadService.localeForLang(lang);
        })
        .run(function title($rootScope, pageTitleLogic) {
            $rootScope.title = function (page) {
                return pageTitleLogic.tilteForPage($rootScope.l, page);
            }
        })
        .run(function partials($rootScope, partialConstant) {
            $rootScope.partials = partialConstant;
        })
        .run(function goTop($rootScope, locationChangeService) {
            $rootScope.goTop = function () {
                locationChangeService.changeToTopPage();
            };
        })
        .run(function url($rootScope, locationResolveService) {
            $rootScope.baseURL = locationResolveService.baseUrl;
            $rootScope.url = function (url) {
                return locationResolveService.resolveUrl(url);
            }
        })
        .run(function scrollTo($rootScope, locationChangeService) {
            $rootScope.scrollTo = function (id) {
                locationChangeService.scrollToHash(id);
            };
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
})(angular);
