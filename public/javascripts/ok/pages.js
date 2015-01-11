/**
 * ok pages module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.pages', [
            'ok.page'
        ]);
})(angular);

/**
 * @ngdoc module
 * @module ok.adminBlogPage
 * @description Page script for admin.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminBlogPage', [
            'ok.adminPage',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {

        })
        .factory('messenger', function (global,
                                        toastMessageService,
                                        confirmMessageService) {
            var l = global.locale,
                showInfoMessage = toastMessageService.showInfoMessage.bind(toastMessageService);
            return {
                askSure: function () {
                    return confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                },
                blogDestroyDone: function (callback) {
                    showInfoMessage(l.pages.admin.DESTROY_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                },
                blogSaveDone: function (callback) {
                    showInfoMessage(l.pages.admin.SAVE_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                }
            }
        })
        .controller('AdminBlogCtrl', function ($scope) {
            $scope.add = function () {
                $scope.$emit('addBlog');
            }
        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   $rootScope,
                                                   blogApiService,
                                                   messenger) {
            $scope.blog = null;
            $scope.close = function () {
                $scope.blog = null;
            }
            $scope.save = function () {
                var blog = $scope.blog,
                    id = blog && blog._id;

                var promise;
                if (id) {
                    promise = blogApiService.update(id, blog)
                } else {
                    console.log('create', blog);
                    promise = blogApiService.create(blog);
                }
                promise.then(function () {
                    $scope.close();
                });
            }
            $scope.add = function () {
                $scope.blog = {};
                console.log('addded', $scope.blog);
            }

            $scope.edit = function (id) {
                blogApiService.one(id)
                    .then(function resolved(data) {
                        $scope.blog = data;
                    })
                    .then(function rejected(err) {
                        //TODO
                    });
            }


            $rootScope.$on('editBlog', function (event, id) {
                $scope.edit(id);
            });
            $rootScope.$on('addBlog', function (event) {
                $scope.add();
            });
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   blogApiService,
                                                   messenger) {

            $scope.ellipsisLength = 32;
            $scope.blogs = [];
            $scope.edit = function (blog) {
                $scope.$emit('editBlog', blog._id);
            }

            blogApiService.list({
                _sort: '_at',
                _reverse: true
            }).then(function resolved(data) {
                $scope.blogs = $scope.blogs.concat(data);
            }, function rejected(err) {

            });

        });

})(angular, apeman);
/**
 * @ngdoc module
 * @module ok.adminPage
 * @description Page script for admin.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'admin';
        })
        .controller('AdminCtrl', function ($scope) {
        })
    ;
})(angular, apeman);
/**
 * @ngdoc module
 * @module ok.blogPage
 * @description Page script for blog.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'blog';
        })
        .controller('BlogCtrl', function ($scope,blogApiService) {

            function applyHash(hash) {
                var id = (hash || '').split('-').pop()
            }

            $scope.$watch('hash()', function () {
                applyHash($scope.hash());
            });


            $scope.condition = {
                _sort: '_at',
                _reverse: true,
                _limit: 20,
                _skip: 0
            };
            $scope.blogs = [];
            $scope.hasMore = true;
            $scope.loadMore = function () {
                load();
            }

            function load() {
                blogApiService.list($scope.condition)
                    .then(function resolved(data) {
                        $scope.blogs = $scope.blogs.concat(data);
                        $scope.hasMore = data.length >= $scope.condition._limit;
                    })
                    .then(function rejected(err) {


                    });
            }


            load();
        })
        .controller('BlogListCtrl', function ($scope) {
        })
        .controller('BlogAsideCtrl', function ($scope) {
        })
    ;

})(angular, apeman);
/**
 * @ngdoc module
 * @module ok.indexPage
 * @descrition Page script for index.
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.indexPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'index';
        })
        .controller('IndexCtrl', function ($scope) {

        })
        .directive('okContentTitle', function (partialUrlConstant) {
            return {
                scope: {
                    title: '=okContentTitle',
                    subtitle: '=okContentSubtitle'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('content-section-title-container');
                },
                templateUrl: partialUrlConstant.INDEX_CONTENT_TITLE
            }
        })
        .directive('okSeeMore', function (partialUrlConstant) {
            return {
                scope: {
                    href: '=okSeeMore'
                },
                link: function (scope, elm, attr) {
                    $(elm).addClass('see-more-button-container');
                },
                templateUrl: partialUrlConstant.INDEX_SEE_MORE_BUTTON
            }
        })
        .controller('IndexProfileCtrl', function ($scope) {
        })
        .controller('IndexBlogCtrl', function ($scope) {
        })
        .controller('IndexWorkCtrl', function ($scope) {
        })
    ;

})(angular, apeman, jQuery);
/**
 * @ngdoc module
 * @module ok.page
 * @descripton okunishitaka.com abstract page script.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.page', [
            'apeman',
            'ok.constants',
            'ok.directives',
            'ok.filters',
            'ok.entities',
            'ok.errors',
            'ok.filters',
            'ok.indices',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ])
        .factory('global', [
            'constantsIndex',
            'servicesIndex',
            '$location',
            function global(cn, sv, $location) {
                var lang = sv.langDetectService.detectLang(),
                    locale = sv.localeLoadService.localeForLang(lang);
                return {
                    lang: lang,
                    locale: locale,
                    get l() {
                        //alias of locale
                        return locale;
                    },
                    app: cn.appConstant,
                    links: cn.linkUrlConstant,
                    images: cn.imageUrlConstant,
                    page: '',
                    pages: cn.pageUrlConstant,
                    partials: cn.partialUrlConstant,
                    goTopPage: function () {
                        sv.locationChangeService.changeToTopPage();
                    },
                    url: function (url) {
                        return sv.locationResolveService.resolveUrl(url);
                    },
                    scrollTo: function (id) {
                        sv.locationChangeService.scrollToHash(id);
                    },
                    hash: $location.hash.bind($location)
                }
            }
        ])
        .run(function exportsGlobal($rootScope, global) {
            ap.copy(global, $rootScope);
        })
        .run(function cahcheTemplates(templatesIndex, templateCacheService) {
            Object.keys(templatesIndex).forEach(function (key) {
                var template = templatesIndex[key];
                templateCacheService.register(template.name, template.content);
            });
        })
        .controller('HeadControl', function HeadControl($scope) {
        })
        .controller('HeaderControl', function HeaderControl($scope) {
        })
        .controller('FooterControl', function FooterControl($scope) {
        });
})(angular, apeman);

/**
 * @ngdoc module
 * @module ok.profilePage
 * @description Page script for profile.
 */

(function (ng, $) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'profile';
        })
        .directive('okProfileList', function (partialUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    $(elm).addClass('profile-list-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData'
                },
                templateUrl: partialUrlConstant.PROFILE_LIST
            }
        })
        .directive('okProfileTable', function (partialUrlConstant, imageUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    scope.images = imageUrlConstant;
                    $(elm).addClass('profile-table-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData'
                },
                templateUrl: partialUrlConstant.PROFILE_TABLE
            }
        })
        .controller('ProfileCtrl', function ($scope, profileApiService) {
            $scope.profile = null;
            profileApiService.singleton()
                .then(function resolve(data) {
                    $scope.profile = data;

                })
                .then(function rejected(err) {
                    //TODO
                });
        });

})(angular, jQuery);
/**
 * @ngdoc module
 * @module ok.workPage
 * @description Page script for work.
 */

(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'work';
        })
        .directive('okWorkLink', function (partialUrlConstant, linkUrlConstant) {
            return {
                scope: {
                    href: '=okWorkHref',
                    title: '=okWorkTitle',
                    icon: '=okWorkIcon'
                },
                link: function (scope, elm, attr) {
                    scope.links = linkUrlConstant;
                    $(elm).addClass('work-link-container');
                },
                templateUrl: partialUrlConstant.WORK_LINK
            }
        })
        .controller('WorkCtrl', function ($scope) {
        })
        .controller('WorkListCtrl', function ($scope, workApiService) {
            $scope.hrefForWork = function (work) {
                if (!work) {
                    return null;
                }
                var links = $scope.links;
                return links[work.demo] || links[work.link] || links[work.repo];
            }
            workApiService.list({
                _sort: '_at',
                _revert: true,
                limit: 100
            }).then(function resolved(data) {
                $scope.works = data;
            }, function rejected(err) {

            });
        });

})(angular, apeman, jQuery);
