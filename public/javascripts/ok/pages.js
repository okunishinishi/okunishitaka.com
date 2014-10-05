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
