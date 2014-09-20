/**
* Page script for blog.
* @requires angular
* @requires l
*/

(function (ng) {
    "use strict";

    ng
        .module('okBlogPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('BlogCtrl', function($scope) {

        });

})(angular);
/**
* Page script for index.
* @requires angular
* @requires l
*/

(function (ng) {
    "use strict";

    ng
        .module('okIndexPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('IndexCtrl', function($scope) {

        });

})(angular);
/**
 * okunishitaka.com abstract page script.
 * @requires angular
 * @requires l
 */

(function (ng, locales) {
    "use strict";

    ng
        .module('okPage', [
            'apeman',
            'okModels',
            'okServices'
        ])
        .run(function locale($rootScope, apLocaleService) {
            Object.keys(locales).forEach(function (lang) {
                apLocaleService.register(lang, locales[lang]);
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
        .run(function partials($rootScope) {
            $rootScope.partials = {
                header: '/html/partials/header.html',
                footer: '/html/partials/footer.html'
            };
        })
        .run(function goTop($rootScope, $location) {
            $rootScope.goTop = function () {
                $location.href = '/';
            };
        })
        .run(function url($rootScope, $window) {
            var location = $window.location;
            $rootScope.baseURL = location.origin || [
                [location.protocol, location.hostname].join("//"),
                (location.port ? ':' + location.port : '')
            ].join('');
            $rootScope.url = function (url) {
                if (url.match(/^\//)) {
                    return [$rootScope.baseURL, url].join('');
                }
                return [location.href, url].join('/');
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
            console.log(l)
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
})(angular, locales);

/**
* Page script for work.
* @requires angular
* @requires l
*/

(function (ng) {
    "use strict";

    ng
        .module('okWorkPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .controller('WorkCtrl', function($scope) {

        });

})(angular);
