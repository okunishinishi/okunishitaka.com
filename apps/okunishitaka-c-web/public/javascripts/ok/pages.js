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
        .controller('BlogCtrl', function defineBlogCtrl($scope) {

        })
        .controller('BlogListCtrl', function ($scope,
                                              objectUtil,
                                              arrayUtil,
                                              errorHandleService,
                                              BlogEntity,
                                              blogApiService,
                                              blogTagApiService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }

            $scope.blogTagHash = {};

            function load() {
                $scope.loading = true;
                blogApiService.list($scope.condition)
                    .then(function resolved(data) {
                        return data.map(BlogEntity.new);
                    }, apiRejected)
                    .then(function (blogs) {
                        $scope.blogs = $scope.blogs.concat(blogs);
                        $scope.hasMore = blogs.length >= $scope.condition._limit;
                        $scope.condition._skip += blogs.length;
                        return blogs;
                    })
                    .then(function (blogs) {
                        return blogTagApiService.list({
                            'blog_id[]': blogs.map(function (blog) {
                                return blog._id;
                            })
                        });
                    })
                    .then(function (blogTags) {
                        var hash = $scope.blogTagHash || {};
                        blogTags.forEach(function (tag) {
                            var blogId = tag.blog_id;
                            hash[blogId] = hash[blogId] || [];
                            var isNew = hash[blogId].indexOf(tag) === -1;
                            if (isNew) {
                                hash[blogId].push(tag);
                            }
                        });
                        $scope.blogTagHash = hash;
                        return hash;
                    }, apiRejected)
                    .then(function (hash) {
                        $scope.blogs.forEach(function (blog) {
                            var tags = hash[blog._id];
                            blog.tag_texts = tags.map(function (tag) {
                                return tag.tag_text;
                            });
                        });
                    })
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            $scope.condition = {
                _sort: '_at',
                _reverse: true,
                _limit: 3,
                _skip: 0
            };
            $scope.blogs = [];
            $scope.hasMore = false;
            $scope.loadMore = function () {
                load();
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
