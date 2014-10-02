/**
 * ok pages module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.pages', [
            
        ]);
})(angular);

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
        .factory('BlogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return ListDatasource.define({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    blogApiService.list(query)
                        .success(function (data, status) {
                            callback(null, data);
                        })
                        .error(function () {
                            callback(new Error('Failed to fetch'));
                        });
                }
            });
        })
        .controller('BlogCtrl', function ($scope, BlogListDatasource) {

            var listDatasource = new BlogListDatasource({

            });

            ap.copy({
                list: listDatasource,
                edit: function (blog) {

                }
            }, $scope);

            $scope.list.load();
        });

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
