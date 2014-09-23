/**
 * Page script for blog.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('okBlogPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .factory('BlogList', function (blogApiService, Blog) {
            function BlogList(properties) {
                var s = this;
                ap.copy(properties || {}, s);
            }

            ap.copy(
                /** @lends BlogList */
                {
                    toModel: function (data) {
                        return new Blog(data);
                    }
                }, BlogList);

            BlogList.prototype = {
                data: [],
                limit: 10,
                skip: 0,
                hasMore: false,
                condition: {},
                query: function () {
                    var s = this,
                        query = {
                            _limit: s.limit,
                            _skip: s.skip
                        };
                    ap.copy(s.condition || {}, query);
                    return query;
                },
                clear: function () {
                    var s = this;
                    s.data = [];
                    s.skip = 0;
                    s.condition = {};
                },
                _fetchData: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    blogApiService.list(s.query)
                        .success(function (data, status) {
                            var models = data.map(BlogList.toModel);
                            callback(null, models);
                        })
                        .error(function () {
                            callback(new Error('Failed to fetch'));
                        });
                },
                load: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    s.skip = 0;
                    s._fetchData(function (err, data) {
                        if (!err) {
                            s.data = data;
                            s.hasMore = s.limit <= data.length;
                        }
                        callback(err);
                    });
                },
                loadMore: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    s.skip = s.data.length;
                    s._fetchData(function (err, data) {
                        if (!err) {
                            s.data = s.data.concat(data);
                            s.hasMore = data.length > 0;
                        }
                        callback(err);
                    });
                }
            }
            return BlogList;
        })
        .controller('BlogCtrl', function ($scope, BlogList) {

            var blogList = new BlogList();
            ap.copy({
                load: function () {
                    blogList.load(function (err) {

                    });
                },
                loadMore: function () {
                    blogList.loadMore(function () {

                    });
                },
                reload: function (callback) {
                    blogList.clear();
                    $scope.load(callback);
                }
            }, $scope);

            Object.defineProperties($scope, {
                hasMore: {
                    get: function () {
                        return blogList.hasMore;
                    }
                },
                blogs: {
                    get: function () {
                        return blogList.data;
                    }
                }
            });

            $scope.load();
        });

})(angular, apeman);
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
        .run(function goTop($rootScope, $window) {
            $rootScope.goTop = function () {
                $window.location.href = '/';
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
