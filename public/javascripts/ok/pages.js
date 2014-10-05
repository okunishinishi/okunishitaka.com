/**
 * Page script for blog.
 * @requires angular
 * @retuires apeman
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {

        })
        .factory('blogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return new ListDatasource({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    blogApiService.list(query, callback);
                }
            });
        })
        .controller('BlogCtrl', function ($scope, blogListDatasource) {
            var listDatasource = blogListDatasource;
            ap.copy({
                listDatasource: listDatasource,
                edit: function (blog) {

                }
            }, $scope);

            listDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope) {
            ap.copy({
                /**
                 * Load more data.
                 */
                more: function () {
                    $scope.listDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                /**
                 * Blog data.
                 */
                blogs: {
                    get: function () {
                        return $scope.listDatasource.data;
                    }
                }
            });
        })
        .controller('BlogDetailCtrl', function ($scope) {

        })
        .controller('BlogEditCtrl', function ($scope) {

        })
    ;

})(angular, apeman);
/**
* Page script for index.
* @requires angular
*/

(function (ng) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {

        })
        .controller('IndexCtrl', function($scope) {

        });

})(angular);
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

/**
* Page script for work.
* @requires angular
*/

(function (ng) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {

        })
        .controller('WorkCtrl', function($scope) {

        });

})(angular);
