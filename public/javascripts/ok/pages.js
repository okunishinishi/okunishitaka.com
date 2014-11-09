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
 * Page script for admin.
 * @requires angular
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
        .factory('blogOneDatasource', function (BlogOneDatasource) {
            return new BlogOneDatasource({});
        })
        .factory('blogListDatasource', function (BlogListDatasource) {
            return new BlogListDatasource({});
        })
        .controller('AdminBlogCtrl', function ($scope, blogListDatasource) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogOneDatasource, blogListDatasource, markdownRenderService) {
            ap.copy({
                save: function (blog) {
                    blogOneDatasource.data = blog;
                    blogOneDatasource.save(function (err, data) {
                        blogOneDatasource.clear();
                        blogListDatasource.reload();
                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {
                    $scope.editing = false;
                }
            }, $scope);
            Object.defineProperties($scope, {
                blog: {
                    get: function () {
                        return blogOneDatasource.data;
                    },
                    set: function (blog) {
                        blogOneDatasource.data = blog;
                    }
                },
                preview: {
                    get: function () {
                        var blog = $scope.blog;
                        if (!blog) {
                            return {};
                        }
                        return {
                            title: blog.title,
                            content: markdownRenderService.render(blog.content)
                        }
                    }
                }
            });
        })
        .controller('AdminBlogListCtrl', function ($scope, blogOneDatasource, blogListDatasource, textSummarizeLogic,
                                                   toastMessageService,
                                                   confirmMessageService) {
            var l = $scope.locale;
            ap.copy({
                edit: function (blog) {
                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load();
                },
                destroy: function (blog) {
                    //var sure = confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                    //if (!sure) {
                    //    return;
                    //}

                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load(function () {
                        blogOneDatasource.destroy(function (err) {
                            if (!err) {
                                var msg = l.pages.admin.DESTROY_BLOG_DONE;
                                toastMessageService.showInfoMessage(msg);
                                blogListDatasource.reload();
                            }
                        });
                    });
                },
                more: function () {
                    blogListDatasource.load();
                },
                summarize: function (text) {
                    return textSummarizeLogic.summarize(text, 30);
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });
            blogListDatasource.load();
        });

})(angular, apeman);
/**
 * Page script for admin.
 * @requires angular
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
 * Page script for blog.
 * @requires angular
 * @retuires apeman
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
        .factory('blogListDatasource', function (BlogListDatasource) {
            return new BlogListDatasource({});
        })
        .controller('BlogCtrl', function ($scope, blogListDatasource) {
            ap.copy({
                more: function () {
                    blogListDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });

            blogListDatasource.load();
        })
        .controller('BlogListCtrl', function ($scope, blogListDatasource) {
        })
        .controller('BlogAsideCtrl', function ($scope, blogListDatasource) {
        })
    ;

})(angular, apeman);
/**
 * Page script for index.
 * @requires angular
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
            'ok.directives',
            'ok.entities',
            'ok.errors',
            'ok.filters',
            'ok.indices',
            'ok.logics',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ])
        .factory('global', [
            'constantsIndex',
            'logicsIndex',
            'servicesIndex',
            function global(cn, lg, sv, tm) {
                var lang = sv.langDetectService.detectLang(),
                    locale = sv.localeLoadService.localeForLang(lang);
                return {
                    lang: lang,
                    locale: locale,
                    get l() {
                        //alias of locale
                        return locale;
                    },
                    title: function (page) {
                        return lg.pageTitleLogic.tilteForPage(locale, page);
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
                    }
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
 * Page script for profile.
 * @requires angular
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
                    data: '=okData',
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
                    data: '=okData',
                },
                templateUrl: partialUrlConstant.PROFILE_TABLE
            }
        })
        .factory('profileSingletonDatasource', function (ProfileSingletonDatasource) {
            return new ProfileSingletonDatasource({});
        })
        .controller('ProfileCtrl', function ($scope, profileSingletonDatasource) {
            profileSingletonDatasource.load();
            Object.defineProperties($scope, {
                profile: {
                    get: function () {
                        return profileSingletonDatasource.data;
                    }
                }
            });
        });

})(angular, jQuery);
/**
 * Page script for work.
 * @requires angular
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
        .factory('workListDatasource', function (WorkListDatasource) {
            return new WorkListDatasource({
                limit: 100
            });
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
        .controller('WorkCtrl', function ($scope, workListDatasource) {
            workListDatasource.load();
        })
        .controller('WorkListCtrl', function ($scope, workListDatasource) {
            ap.copy({
                hrefForWork: function (work) {
                    if (!work) {
                        return null;
                    }
                    var links = $scope.links;
                    return links[work.demo] || links[work.link] || links[work.repo];
                }
            }, $scope);
            Object.defineProperties($scope, {
                works: {
                    get: function () {
                        return workListDatasource.data;
                    }
                }

            });
        });

})(angular, apeman, jQuery);
