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
        .factory('blogEditingDatasource', function (BlogEditingDatasource) {
            return new BlogEditingDatasource({});
        })
        .controller('AdminBlogCtrl', function ($scope) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogEditingDatasource, blogRenderService) {
            ap.copy({
                preview: function (blog) {
                    return blogRenderService.renderBlog(blog);
                },
                editing: blogEditingDatasource,
                save: function (blog) {
                    blogEditingDatasource.save(function (err, data) {
                        $scope.close();
                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {
                    blogEditingDatasource.clear();
                }
            }, $scope);
        })
        .factory('blogListingDatasource', function (BlogListingDatasource) {
            return new BlogListingDatasource({
                _sort: '_at',
                _revert: true
            });
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   blogEditingDatasource,
                                                   blogListingDatasource,
                                                   textSummarizeLogic,
                                                   toastMessageService,
                                                   confirmMessageService) {
            var l = $scope.locale;

            ap.copy({
                listing: blogListingDatasource,
                edit: function (blog) {
                    blogEditingDatasource
                        .init({id: blog._id})
                        .load(function () {
                        });
                },
                destroy: function (blog) {
                    var sure = confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                    if (!sure) {
                        return;
                    }

                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load(function () {
                        blogOneDatasource.destroy(function (err) {
                            if (!err) {
                                var msg = l.pages.admin.DESTROY_BLOG_DONE;
                                toastMessageService.showInfoMessage(msg);
                                blogListingDatasource.load();
                            }
                        });
                    });
                },
                summarize: function (text) {
                    return textSummarizeLogic.summarize(text, 30);
                }
            }, $scope);

            blogListingDatasource.load();
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
        .factory('blogListingDatasource', function (BlogListingDatasource) {
            return new BlogListingDatasource({
                _sort: '_at',
                _revert: true
            });
        })
        .controller('BlogCtrl', function ($scope, blogListingDatasource) {
            ap.copy({
                listing: blogListingDatasource
            }, $scope);

            blogListingDatasource.load();
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
            'ok.datasources',
            'ok.directives',
            'ok.filters',
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
            function global(cn, lg, sv) {
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
        .factory('profileViewingDatasource', function (ProfileViewingDatasource) {
            return new ProfileViewingDatasource({});
        })
        .controller('ProfileCtrl', function ($scope, profileViewingDatasource) {
            $scope.viewing = profileViewingDatasource;
            profileViewingDatasource.load(function (err) {
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
        .factory('workListingDatasource', function (WorkListingDatasource) {
            return new WorkListingDatasource({
                _sort: '_at',
                _revert: true,
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
        .controller('WorkCtrl', function ($scope) {
        })
        .controller('WorkListCtrl', function ($scope, workListingDatasource) {
            ap.copy({
                listing: workListingDatasource,
                hrefForWork: function (work) {
                    if (!work) {
                        return null;
                    }
                    var links = $scope.links;
                    return links[work.demo] || links[work.link] || links[work.repo];
                }
            }, $scope);
            workListingDatasource.load();
        });

})(angular, apeman, jQuery);
