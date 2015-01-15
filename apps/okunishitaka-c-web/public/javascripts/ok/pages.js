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
 * @module ok.adminPage
 * @description Page script for admin.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.adminPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'admin';
        })
        .factory('blogList', function (BlogList) {
            return new BlogList({
                condition: {
                    _sort: '_at',
                    _reverse: true,
                    _limit: 10,
                    _skip: 0
                }
            });
        })
        .controller('AdminCtrl', function defineAdminCtrl($scope) {

        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   adminBlogApiService,
                                                   blogLoadService,
                                                   BlogEntity,
                                                   blogSaveService,
                                                   errorHandleService,
                                                   toastMessageService,
                                                   l,
                                                   locationSearchService,
                                                   eventEmitService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load(blogId) {
                $scope.blogId = blogId;
                if (!blogId) {
                    return;
                }
                locationSearchService.update('blog_id', blogId);
                $scope.loading = true;
                blogLoadService.load(blogId)
                    .then(function (blog) {
                        $scope.blog = blog;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            eventEmitService.on('admin.editBlog', function (ev, blog) {
                var _id = blog && blog._id;
                load(_id);
            });


            $scope.close = function () {
                $scope.blogId = null;
                $scope.blog = null;
            };

            $scope.save = function (blog) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                blogSaveService.save(blog)
                    .then(function () {
                        $scope.close();
                        toastMessageService.showInfoMessage(l.toasts.SAVE_DONE);
                        eventEmitService.emit('blog.saveBlog.done');
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            };

        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   adminBlogApiService,
                                                   l,
                                                   objectUtil,
                                                   arrayUtil,
                                                   errorHandleService,
                                                   toastMessageService,
                                                   eventEmitService,
                                                   blogList) {
            function apiRejected(err) {
                errorHandleService.handleError(err);
            }

            $scope.CONTENT_MAX_LENGTH = 80;

            function load() {
                $scope.loading = true;
                blogList.fetch()
                    .then(function (result) {
                        $scope.blogs = result.data;
                        $scope.hasMore = result.hasMore;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            function reload() {
                blogList.clear();
                load();
            }

            $scope.hasMore = false;
            $scope.loadMore = function () {
                load();
            };

            $scope.edit = function (b) {
                eventEmitService.emit('admin.editBlog', b);
            };
            $scope.destroy = function (b) {
                var sure = confirm(l.messages.SURE_TO_DESTROY);
                if (sure) {
                    $scope.loading = true;
                    adminBlogApiService.destroy(b._id)
                        .then(function () {
                            toastMessageService.showInfoMessage(l.toasts.DESTROY_DONE);
                            reload();
                        }, apiRejected)
                        .finally(function () {
                            $scope.loading = false;
                        });
                }
            };

            eventEmitService.on('blog.saveBlog.done', function () {
                reload();
            });


            load();
        });

})(angular);
/**
 * @ngdoc module
 * @module ok.blogPage
 * @description Page script for blog.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'blog';
        })
        .factory('blogList', function (BlogList) {
            return new BlogList({
                condition: {
                    _sort: '_at',
                    _reverse: true,
                    _limit: 3,
                    _skip: 0
                }
            });
        })
        .controller('BlogCtrl', function defineBlogCtrl($scope) {

        })
        .controller('BlogDetailCtrl', function ($scope,
                                                blogApiService,
                                                BlogEntity,
                                                errorHandleService,
                                                locationSearchService,
                                                eventEmitService) {
            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load(blogId) {
                $scope.blogId = blogId;
                if (!blogId) {
                    return;
                }
                locationSearchService.update('blog_id', blogId);
                $scope.loading = true;
                blogApiService.one(blogId)
                    .then(function (data) {
                        $scope.blog = BlogEntity.new(data);
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            eventEmitService.on('blog.detailBlog', function (ev, blog) {
                var _id = blog && blog._id;
                load(_id);
            });

            var blogId = locationSearchService.get('blog_id');
            load(blogId);

            $scope.$watch(function () {
                return locationSearchService.get();
            }, function (search) {
                var blogId = search['blog_id'],
                    changed = $scope.blogId !== blogId;
                if (changed) {
                    load(blogId);
                }
            });
        })
        .controller('BlogListCtrl', function ($scope,
                                              objectUtil,
                                              arrayUtil,
                                              errorHandleService,
                                              eventEmitService,
                                              blogList) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }

            $scope.CONTENT_MAX_LENGTH = 80;

            function load() {
                $scope.loading = true;
                blogList.fetch()
                    .then(function (result) {
                        $scope.blogs = result.data;
                        $scope.hasMore = result.hasMore;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            $scope.hasMore = false;
            $scope.loadMore = function () {
                load();
            };

            $scope.detail = function (b) {
                eventEmitService.emit('blog.detailBlog', b);
            };

            load();

        });

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
        .controller('ProfileCtrl', function defineProfileCtrl($scope,
                                                              profileApiService,
                                                              errorHandleService) {
            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load() {
                $scope.loading = true;
                profileApiService.one(null)
                    .then(function (profile) {
                        $scope.profile = profile;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            load();
        });

})(angular);
/**
 * @ngdoc module
 * @module ok.workPage
 * @description Page script for work.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.workPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
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

        .controller('WorkCtrl', function defineWorkCtrl($scope,
                                                        workApiService,
                                                        errorHandleService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load() {
                $scope.loading = true;
                workApiService.list({})
                    .then(function (works) {
                        $scope.works = works;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            load();

            $scope.hrefForWork = function (work) {
                if (!work) {
                    return null;
                }
                var links = $scope.links;
                return links[work.demo] || links[work.link] || links[work.repo];
            };
        })

})(angular);
