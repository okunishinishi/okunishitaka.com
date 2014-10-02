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
        .run(function locale($rootScope, apLocaleService, localeConstant) {
            Object.keys(localeConstant).forEach(function (lang) {
                apLocaleService.register(lang, localeConstant[lang]);
            });
            var lang = 'en'; //FIXME
            $rootScope.l = apLocaleService.localeForLang(lang);
        })
        .run(function title($rootScope) {
            $rootScope.title = function (page) {
                var name = $rootScope.l.meta.name;
                return [page, name].join(' - ');
            }
        })
        .run(function partials($rootScope, partialConstant) {
            $rootScope.partials = partialConstant;
        })
        .run(function goTop($rootScope, $window) {
            $rootScope.goTop = function () {
                $window.location.href = '/';
            };
        })
        .run(function url($rootScope, $window, urlUtil) {
            var location = $window.location;
            $rootScope.baseURL = urlUtil.baseUrlWithLocation(location);
            $rootScope.url = function (url) {
                if (url.match(/^\//)) {
                    return urlUtil.joinUrl($rootScope.baseURL, url);
                }
                return urlUtil.joinUrl(location.href, url);
            }
        })
        .run(function scrollTo($rootScope, $location, $anchorScroll) {
            $rootScope.scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
        })
        .controller('HeadControl', function ($scope) {
            var l = $scope.l;
            $scope.navItem = [
                {
                    href: '/',
                    title: l.pageNames.index
                },
                {
                    href: '/blog',
                    title: l.pageNames.blog
                },
                {
                    href: '/work',
                    title: l.pageNames.work
                }
            ]
        })
        .controller('FootControl', function ($scope) {

        });
})(angular);
