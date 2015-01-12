/**
 * @ngdoc module
 * @module ok.components
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.components', [
            'ok.services',
            'ok.utils'
        ]);
})(angular);


/**
 * @ngdoc module
 * @module ok.constants
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.constants', [
            
        ]);
})(angular);

/**
 * Constant for app.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('appConstant', {
		    "VERSION": "0.0.0",
		    "SUPPORTED_LANGS": [
		        "ja"
		    ]
		});

})(angular);


/**
 * Constant for code.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('codeConstant', {
		    "appErrorCodes": {
		        "CONFLICT_ERROR": 0,
		        "CONNECTION_ERROR": 1,
		        "NOT_FOUND_ERROR": 2,
		        "SERVER_ERROR": 3,
		        "UNEXPECTED_ERROR": 4,
		        "VALIDATION_ERROR": 5
		    },
		    "httpStatusCodes": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "NOT_AUTHORIZED_ERROR": 401,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
		});

})(angular);


/**
 * Constant for icon.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('iconConstant', {
		    "ACCOUNT": "ion ion-ios-contact-outline",
		    "CLOSE": "ion ion-close",
		    "DOWN": "ion ion-chevron-down",
		    "LEFT": "ion ion-chevron-left",
		    "PLUS": "ion ion-plus",
		    "RIGHT": "ion ion-chevron-right",
		    "SIGNIN": "ion ion-log-in",
		    "SIGNOUT": "ion ion-log-out"
		});

})(angular);


/**
 * Constant for locale.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('localeConstant', {
		    "ja": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "HOMEPAGE": "http://okunishitaka.com",
		            "COPY_RIGHT": "Copyright © 2015 okunishitaka.com"
		        },
		        "pageNames": {},
		        "labels": {},
		        "buttons": {},
		        "errors": {
		            "CONFLICT": "コンフリクト（衝突）が発生しました。他の人が更新を行なったようです。",
		            "CONNECTION": "通信に失敗しました。",
		            "UNEXPECTED": "予期せぬエラーが発生しました。",
		            "NOT_FOUND_ERROR": "対象のリソースが見つかりませんでした。",
		            "DUPLICATE_ERROR": "同じ{key}が既に登録されています。",
		            "SIGN_FAIL_ERROR": "undefinedまたはundefinedが違います。",
		            "RETYPE_ERROR": "{key1}と{key2}が一致しません。",
		            "MACHINE_NOT_CONNECTED": "undefinedに接続されていません。",
		            "validationError": {
		                "INVALID_TYPE": "型が不正です。: {type} (期待値： {expected})",
		                "ENUM_MISMATCH": "合致するenumがありません。: {value}",
		                "ANY_OF_MISSING": "\"anyOf\"のうちどれにも当てはまりません",
		                "ONE_OF_MISSING": "\"oneOf\"のうちどれにも当てはまりません",
		                "ONE_OF_MULTIPLE": "\"oneOf\"のうちの複数に該当しています。: 条件{index1}と条件{index2}",
		                "NOT_PASSED": "\"not\"で指定された定義に合致しています。",
		                "NUMBER_MULTIPLE_OF": "値{value}は{multipleOf}の倍数ではありません",
		                "NUMBER_MINIMUM": "値{value}は最小値{minimum}以下です",
		                "NUMBER_MINIMUM_EXCLUSIVE": "値{value}は最小値{minimum}よりも小さいです",
		                "NUMBER_MAXIMUM": "値{value}は最大値{maximum}以上です",
		                "NUMBER_MAXIMUM_EXCLUSIVE": "値{value}は最大値を{maximum}を超えています",
		                "STRING_LENGTH_SHORT": "文字列が短すぎます({length} chars), 最小長は{minimum}です",
		                "STRING_LENGTH_LONG": "文字列が長過ぎます({length} chars), 最大長は{maximum}です",
		                "STRING_PATTERN": "パターンに一致しません: {pattern}",
		                "OBJECT_PROPERTIES_MINIMUM": "項目が少なすぎます ({propertyCount}), 最小 {minimum}",
		                "OBJECT_PROPERTIES_MAXIMUM": "項目が多すぎます ({propertyCount}), 最大 {maximum}",
		                "OBJECT_REQUIRED": "{key}は必須です。",
		                "OBJECT_ADDITIONAL_PROPERTIES": "追加項目は許可されていません",
		                "OBJECT_DEPENDENCY_KEY": "依存関係の解決に失敗しました。 - 必要なキー: {missing} (依存するキー: {key})",
		                "ARRAY_LENGTH_SHORT": "配列が短すぎます({length}), 最小長は{minimum}です",
		                "ARRAY_LENGTH_LONG": "配列が長過ぎます({length}), 最大長は{maximum}です",
		                "ARRAY_UNIQUE": "配列要素が重複しています (要素{match1}と要素{match2}が重複)",
		                "ARRAY_ADDITIONAL_ITEMS": "配列の要素追加は許可されていません",
		                "FORMAT_CUSTOM": "不正なフォーマット ({message})",
		                "KEYWORD_CUSTOM": "不正なキーワード: {key} ({message})",
		                "CIRCULAR_REFERENCE": "相互参照をしています $refs: {urls}",
		                "UNKNOWN_PROPERTY": "不明な項目です。 (not in schema)"
		            }
		        }
		    }
		});

})(angular);


/**
 * Constant for apiUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('apiUrlConstant', {
		    "ADMIN_API_BLOG_DELETE_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_GET": "/admin/api/blog",
		    "ADMIN_API_BLOG_GET_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_POST": "/admin/api/blog",
		    "ADMIN_API_BLOG_PUT_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_TAG_DELETE_WITH_ID": "/admin/api/blog-tag/:_id",
		    "ADMIN_API_BLOG_TAG_GET": "/admin/api/blog-tag",
		    "ADMIN_API_BLOG_TAG_POST": "/admin/api/blog-tag",
		    "API_BLOG_GET": "/api/blog",
		    "API_BLOG_GET_WITH_ID": "/api/blog/:_id",
		    "API_BLOG_TAG_GET": "/api/blog-tag"
		});

})(angular);


/**
 * Constant for imageUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('imageUrlConstant', {
		    "QUALIFICATION_0159": "/images/qualification/qualification_0159.jpg",
		    "QUALIFICATION_0160": "/images/qualification/qualification_0160.jpg",
		    "QUALIFICATION_0161": "/images/qualification/qualification_0161.jpg",
		    "QUALIFICATION_0162": "/images/qualification/qualification_0162.jpg",
		    "QUALIFICATION_0163": "/images/qualification/qualification_0163.jpg",
		    "QUALIFICATION_0164": "/images/qualification/qualification_0164.jpg",
		    "WORKS_CHESS_THUMBNAIL": "/images/works/works-chess-thumbnail.png",
		    "WORKS_CSS_GALLERY_THUMBNAIL": "/images/works/works-css-gallery-thumbnail.png",
		    "WORKS_DOC_GALLERY_THUMBNAIL": "/images/works/works-doc-gallery-thumbnail.png",
		    "WORKS_FILEDROP_THUMBNAIL": "/images/works/works-filedrop-thumbnail.png",
		    "WORKS_KUROKAWA_THUMBNAIL": "/images/works/works-kurokawa-thumbnail.png",
		    "WORKS_MOCK_MONKEY_THUMBNAIL": "/images/works/works-mock-monkey-thumbnail.png",
		    "WORKS_OKUNISHITAKA_THUMBNAIL": "/images/works/works-okunishitaka-thumbnail.png",
		    "WORKS_OTHERO_THUMBNAIL": "/images/works/works-othero-thumbnail.png",
		    "WORKS_PLANING_PORKER_THUMBNAIL": "/images/works/works-planing-porker-thumbnail.png",
		    "WORKS_SELLIT_THUMBNAIL": "/images/works/works-sellit-thumbnail.png",
		    "WORKS_SHOT_THUMBNAIL": "/images/works/works-shot-thumbnail.png",
		    "WORKS_TYPE_THUMBNAIL": "/images/works/works-type-thumbnail.png"
		});

})(angular);


/**
 * Constant for jsonUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('jsonUrlConstant', {});

})(angular);


/**
 * Constant for pageUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('pageUrlConstant', {
		    "INDEX": "/index.html",
		    "PROFILE": "/profile.html"
		});

})(angular);


/**
 * Constant for partialUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "COVER": "/html/partials/cover.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "META": "/html/partials/meta.html",
		    "TITLE": "/html/partials/title.html",
		    "TOAST": "/html/partials/toast.html"
		});

})(angular);


/**
 * Constant for zipUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('zipUrlConstant', {});

})(angular);


/**
 * Constant for view.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('viewConstant', {
		    "profile.LIST": "partialUrlConstant.PROFILE_PROFILE_LIST_VIEW"
		});

})(angular);



/**
 * @ngdoc module
 * @module ok.directives
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.constants',
            'ok.filters',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okReplace
 * @description Ok replace.
 */
(function (ng) {
    "use strict";
    var name = 'okReplace';
    ng
        .module('ok.directives')
        .directive(name, function defineKgReplace($http, $templateCache, $compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var urlExpression = attr[name],
                        url = scope.$eval(urlExpression);
                    if (!url) {
                        return;
                    }
                    $http.get(url, {
                        cache: $templateCache
                    })
                        .success(function (content) {
                            element.replaceWith($compile(content)(scope));
                        })
                        .error(function () {
                            console.error('[' + name + '] Failed to load template:', urlExpression);
                        })
                    ;
                }
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okToast
 * @description Ok toast.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okToast', function defineOkToast() {
            return {

            }
        });

})(angular);

/**
 * @ngdoc module
 * @module ok.entities
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.entities', [
            'ok.constants',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc Object
 * @name BlogEntity
 * @description Blog entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogEntity', function defineBlogEntity(Entity) {

            /**
             * @augments Entity
             * @constructor BlogEntity
             * @param {object} data - Entity data.
             */
            var BlogEntity = Entity.define(
                /** @lends BlogEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            BlogEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogEntity.new = function (data) {
                var entity = new BlogEntity(data);
                return entity;
            };

            return BlogEntity;

        });

})(angular);
/**
 * @ngdoc Object
 * @name BlogTagEntity
 * @description BlogTag entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogTagEntity', function defineBlogTagEntity(Entity) {

            /**
             * @augments Entity
             * @constructor BlogTagEntity
             * @param {object} data - Entity data.
             */
            var BlogTagEntity = Entity.define(
                /** @lends BlogTagEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            BlogTagEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogTagEntity.new = function (data) {
                var entity = new BlogTagEntity(data);
                return entity;
            };

            return BlogTagEntity;

        });

})(angular);
/**
 * @ngdoc object
 * @name Entity
 * @description Abstract Entity.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('Entity', function (objectUtil) {
            var copy = objectUtil.copy.bind(objectUtil);

            /** @lends Entity */
            function Entity() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Initialize an entity.
             * @param {object} data - Entity data.
             */
            Entity.prototype.init = function (data) {
                var s = this;
                copy(data || {}, s);
            };

            Entity.define = function (properties) {

                var Defined = function () {
                    var s = this;
                    s.init.apply(s, arguments);
                };

                Defined.prototype = new Entity(properties);

                /**
                 * Create a new entity instance.
                 * @param {object} data - Entity data.
                 * @returns {Defined}
                 */
                Defined.new = function (data) {
                    return new Defined(data);
                };

                return Defined;
            };

            return Entity;
        });
})(angular);

/**
 * @ngdoc module
 * @module ok.errors
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.errors', [
            
        ]);
})(angular);

/**
 * @ngdoc object
 * @name AppApiError
 * @description App api error.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppApiError', function defineAppApiError (AppError) {

            /**
             * @augments Error
             * @constructor AppApiError
             * @param {number} code - App error code.
             * @param {object} message - Error message.
             */
            var AppApiError = AppError.define(
                /** @lends AppApiError.prototype */
                {
                    name: 'AppApiError'
                }
            );

            return AppApiError;

        });

})(angular);
/**
 * @ngdoc object
 * @name AppError
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.errors')
        .factory('AppError', function defineAppError(objectUtil) {
            var copy = objectUtil.copy.bind(objectUtil);

            /**
             * @augments Error
             * @constructor AppError
             * @param {number} code - App error code.
             * @param {object} data - Error data.
             */
            function AppError(code, data) {
                var s = this;
                s.init.apply(s, arguments);
            }

            AppError.prototype = copy(
                /** @lends AppError.prototype */
                {
                    name: 'AppError',
                    /**
                     * Initialize an error.
                     * @param {number} code - Error code.
                     * @param {string} data - Error data.
                     */
                    init: function (code, data) {
                        var s = this;
                        s.code = code;
                        s.data = data;
                    }
                },
                new Error()
            );

            copy(
                {
                    /**
                     * Define an app error.
                     * @param {object} properties - Error properties.
                     */
                    define: function (properties) {
                        var Defined = function () {
                            var s = this;
                            s.init.apply(s, arguments);
                        };
                        Defined.prototype = copy(
                            properties, new AppError()
                        );
                        copy(AppError, Defined);
                        return Defined;
                    }
                },
                AppError
            );

            return AppError;

        });

})(angular);

/**
 * @ngdoc module
 * @module ok.filters
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter(stringUtil) {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                var pageNames = l.pageNames || {};
                pageName = pageNames[stringUtil.underscorize(pageName).toUpperCase()];
                if (!pageName) {
                    return appName;
                }
                return [pageName, appName].join(' - ');
            };
        });
})(angular);

/**
 * @ngdoc module
 * @module ok.indices
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.directives',
            'ok.entities',
            'ok.errors',
            'ok.filters',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc object
 * @name constantsIndex
 * @description Constants index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('constantsIndex', function defineConstantsIndex($injector) {
            return {
                get appConstant() { return $injector.get('appConstant'); },
                get codeConstant() { return $injector.get('codeConstant'); },
                get iconConstant() { return $injector.get('iconConstant'); },
                get localeConstant() { return $injector.get('localeConstant'); },
                get apiUrlConstant() { return $injector.get('apiUrlConstant'); },
                get imageUrlConstant() { return $injector.get('imageUrlConstant'); },
                get jsonUrlConstant() { return $injector.get('jsonUrlConstant'); },
                get pageUrlConstant() { return $injector.get('pageUrlConstant'); },
                get partialUrlConstant() { return $injector.get('partialUrlConstant'); },
                get zipUrlConstant() { return $injector.get('zipUrlConstant'); },
                get viewConstant() { return $injector.get('viewConstant'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name entitiesIndex
 * @description Entities index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('entitiesIndex', function defineEntitiesIndex($injector) {
            return {
                get BlogEntity() { return $injector.get('BlogEntity'); },
                get BlogTagEntity() { return $injector.get('BlogTagEntity'); },
                get Entity() { return $injector.get('Entity'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name errorsIndex
 * @description Errors index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('errorsIndex', function defineErrorsIndex($injector) {
            return {
                get AppApiError() { return $injector.get('AppApiError'); },
                get AppError() { return $injector.get('AppError'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name servicesIndex
 * @description Services index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('servicesIndex', function defineServicesIndex($injector) {
            return {
                get adminBlogApiService() { return $injector.get('adminBlogApiService'); },
                get adminBlogTagApiService() { return $injector.get('adminBlogTagApiService'); },
                get apiService() { return $injector.get('apiService'); },
                get blogApiService() { return $injector.get('blogApiService'); },
                get blogTagApiService() { return $injector.get('blogTagApiService'); },
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get errorHandleService() { return $injector.get('errorHandleService'); },
                get eventEmitService() { return $injector.get('eventEmitService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localStorageService() { return $injector.get('localStorageService'); },
                get localeStoreService() { return $injector.get('localeStoreService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get locationSearchService() { return $injector.get('locationSearchService'); },
                get templateCacheService() { return $injector.get('templateCacheService'); },
                get toastMessageService() { return $injector.get('toastMessageService'); },
                get urlFormatService() { return $injector.get('urlFormatService'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name templatesIndex
 * @description Templates index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get coverHtmlTemplate() { return $injector.get('coverHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); }
            };
        });
})(angular);
/**
 * @ngdoc object
 * @name utilsIndex
 * @description Utils index.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('utilsIndex', function defineUtilsIndex($injector) {
            return {
                get arrayUtil() { return $injector.get('arrayUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get stringUtil() { return $injector.get('stringUtil'); }
            };
        });
})(angular);

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
        .controller('IndexCtrl', function defineIndexCtrl($scope) {

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
        .controller('ProfileCtrl', function defineProfileCtrl($scope) {

        });

})(angular);

/**
 * @ngdoc module
 * @module ok.services
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'ap.services',
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc Service
 * @name adminBlogApiService
 * @description AdminBlog api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogApiService', function AdminBlogApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET_WITH_ID, {_id: _id});
                return apiService.get(url);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Update a resource.
             * @param {string} _id - Resource id.
             * @param {object} data - Data to update.
             * @returns {Promise} - Deferred promise.
             */
            s.update = function update(_id, data) {
                    var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_PUT_WITH_ID, {_id: _id});
                    return apiService.put(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name adminBlogTagApiService
 * @description AdminBlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogTagApiService', function AdminBlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name apiService
 */
(function (ng) {
    "use strict";


    ng
        .module('ok.services')
        .service('apiService', function ApiService($http, $q, AppApiError,
                                                   objectUtil, stringUtil, codeConvertService) {
            var s = this;
            objectUtil.copy(
                /**
                 * @lends apiService
                 */
                {
                    _newError: function (data, status) {
                        var s = this;
                        var code = codeConvertService.errorCodeWithHttpStatus(status);
                        if (code === null) {
                            code = codeConvertService.UNEXPECTED_ERROR;
                        }
                        return new AppApiError(code, data && (data.error || data.errors || data.err) || data);
                    },
                    /**
                     * Get x field values.
                     * @param headers
                     * @private
                     */
                    _xFields: function (headers) {
                        var prefix = /^x\-/;
                        var keys = Object.keys(headers),
                            result = {};
                        for (var i = 0, len = keys.length; i < len; i++) {
                            var key = keys[i];
                            if (!key.match(prefix)) {
                                continue;
                            }
                            var property = stringUtil.camelize(key.replace(prefix, ''));
                            result[property] = headers[key];
                        }
                        return result
                    },
                    /**
                     * Send request.
                     * @param {object} config - Request configuration.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _request: function (config) {
                        var s = this;
                        if (!config.url) {
                            // angular.js標準のエラーが分かりにくいのでここで明示的にthrowしている。
                            throw new Error('url is required.');
                        }
                        var deferred = $q.defer();
                        $http(config)
                            .success(function (data, status, headers) {
                                var xFields = s._xFields(headers());
                                deferred.notify(xFields);
                                deferred.resolve(data);

                                s._sendNotification(xFields);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                deferred.reject(err);
                            });
                        return deferred.promise;
                    },
                    _sendNotification: function (data) {
                        var s = this;
                        var handlers = s._notificationHandler || [];
                        for (var i = 0; i < handlers.length; i++) {
                            var handler = handlers[i];
                            handler(data);
                        }
                    },
                    addNotificationHandler: function (handler) {
                        var s = this;
                        s._notificationHandler = s._notificationHandler || [];
                        s._notificationHandler.push(handler);
                    },
                    /**
                     * Request with params.
                     * @param {string} url - Url to request.
                     * @param {string} method - Method to request.
                     * @param {object} params - Parameter data.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _paramsRequest: function (url, method, params) {
                        var s = this;
                        return s._request({
                            url: url,
                            method: method,
                            params: params
                        });
                    },
                    /**
                     * Request with data.
                     * @param {string} url - Url to request.
                     * @param {string} method - Method to request.
                     * @param {object} data - Request data.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _dataRequest: function (url, method, data) {
                        var s = this;
                        return s._request({
                            url: url,
                            method: method,
                            data: data,
                            headers: {
                                'Content-Type': "application/json;"
                            }
                        });
                    },
                    /**
                     * Get request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    get: function (url, params) {
                        var s = this;
                        return s._paramsRequest(url, 'GET', params);
                    },
                    /**
                     * Head request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    head: function (url, params) {
                        var s = this;
                        return s._paramsRequest(url, 'HEAD', params);
                    },
                    /**
                     * Post request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    post: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'POST', data);
                    },
                    /**
                     * Put request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    put: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'PUT', data);
                    },
                    /**
                     * Delete request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    delete: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'DELETE', data);
                    }
                },
                s
            );
        }
    );
})(angular);
/**
 * @ngdoc Service
 * @name blogApiService
 * @description Blog api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_BLOG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.API_BLOG_GET_WITH_ID, {_id: _id});
                return apiService.get(url);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name blogTagApiService
 * @description BlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogTagApiService', function BlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

        });
})(angular);
/**
 * @ngdoc object
 * @name codeConvertService
 * @description Code convert service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('codeConvertService', function CodeConvertService(codeConstant) {
            var s = this;
            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;

            /**
             * Unexpected error code.
             * @type {number}
             */
            s.UNEXPECTED_ERROR = appErrorCodes.UNEXPECTED_ERROR;

            /**
             * Get error code for http status
             * @param {number} statusCode - HTTP status code.
             */
            s.errorCodeWithHttpStatus = function (statusCode) {
                statusCode = Number(statusCode);
                var keys = Object.keys(appErrorCodes);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var hit = httpStatusCodes[key] === statusCode;
                    if (hit) {
                        return appErrorCodes[key];
                    }
                }
                return null;
            }

        });

})(angular);
/**
 * @ngdoc object
 * @name errorHandleService
 * @description Error handle service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('errorHandleService', function ErrorHandleService(l,
                                                                   codeConstant,
                                                                   toastMessageService,
                                                                   $rootScope) {
            var s = this,
                appErrorCodes = codeConstant.appErrorCodes;

            /**
             * Show validation error.
             * @param {object[]} data - Validation error data.
             * @param {object} scope - Scope to evaluate message.
             * @private
             */
            s._showValidationError = function (data, scope) {

                scope.validationErrors = [].concat(data || []).map(function (data) {
                    if (data.messageKey) {
                        var message = l.errors[data.messageKey];
                        data.message = (message || data.message).replace(/\{key\}/g, data.key);
                    }
                    return data;
                });
            };

            /**
             * Handle error.
             * @param {object} err - Error to handle.
             * @param {object} [scope=$rootScope] - Scope to evaluate message.
             */
            s.handleError = function (err, scope) {
                scope = scope || $rootScope;
                var messages = [].concat(err.message || []);
                switch (err.code) {
                    case appErrorCodes.VALIDATION_ERROR:
                        s._showValidationError(err.data, scope);
                        break;
                    case appErrorCodes.CONFLICT_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONFLICT);
                        break;
                    case appErrorCodes.CONNECTION_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONNECTION);
                        break;
                    case appErrorCodes.NOT_FOUND_ERROR:
                        toastMessageService.showErrorMessage(l.errors.NOT_FOUND_ERROR);
                        break;
                    case appErrorCodes.SERVER_ERROR:
                    case appErrorCodes.UNEXPECTED_ERROR:
                    default:
                        messages.forEach(function (message) {
                            console.error(message);
                        });
                        toastMessageService.showErrorMessage(l.errors.UNEXPECTED);
                }
            };

            /**
             * Clear errors in scope.
             * @param scope
             */
            s.clearErrors = function (scope) {
                scope.validationErrors = {};
            };

        });

})(angular);
/**
 * @ngdoc object
 * @name eventEmitService
 * @description Event emit service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('eventEmitService', function EventEmitService(apEventEmitService) {
            var s = this;
            s.__proto__ = apEventEmitService;

        });

})(angular);
/**
 * @ngdoc object
 * @name langDetectService
 * @description Lang detect service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(apLangDetectService, appConstant) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0] || null;
            s.__proto__ = apLangDetectService;

            s.detectLang = function () {
                return apLangDetectService.detectLang(SUPPORTED_LANGS) || DEFAULT_LANG;
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name localStorageService
 * @description Local storage service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localStorageService', function LocalStorageService(apLocalStorageService) {
            var s = this;
            s.__proto__ = apLocalStorageService;

        });

})(angular);
/**
 * @ngdoc object
 * @name localeStoreService
 * @description Locale store service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeStoreService', function LocaleStoreService(apLocaleStoreService, localeConstant) {
            var s = this;
            s.__proto__ = apLocaleStoreService;
            s._locales = {};
            s.registerAll(localeConstant);

        });

})(angular);
/**
 * @ngdoc object
 * @name locationChangeService
 * @description Location change service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationChangeService', function LocationChangeService(apLocationChangeService) {
            var s = this;
            s.__proto__ = apLocationChangeService;

        });

})(angular);
/**
 * @ngdoc object
 * @name locationResolveService
 * @description Location resolve service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService(apLocationResolveService) {
            var s = this;
            s.__proto__ = apLocationResolveService;
        });

})(angular);
/**
 * @ngdoc object
 * @name locationSearchService
 * @description Location search service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationSearchService', function LocationSearchService(apLocationSearchService) {
            var s = this;
            s.__proto__ = apLocationSearchService;

        });

})(angular);
/**
 * @ngdoc object
 * @name templateCacheService
 * @description Template cache service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService(apTemplateCacheService) {
            var s = this;
            s.__proto__ = apTemplateCacheService;
        });

})(angular);
/**
 * @ngdoc object
 * @name toastMessageService
 * @description Toast message service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('toastMessageService', function ToastMessageService($rootScope, $timeout) {
            var s = this;
            s._dismissTimer = null;
            s._dismissDuration = 2000;
            s._showMessage = function (message, type) {
                $rootScope.toasts = $rootScope.toasts || {};
                var queue = $rootScope.toasts[type] = $rootScope.toasts[type] || [];
                if (s._dismissTimer) {
                    $timeout.cancel(s._dismissTimer);
                    queue.shift();
                }
                queue.push(message);
                s._dismissTimer = $timeout(function () {
                    queue.shift();
                }, s._dismissDuration);
            };

            /**
             * Show info message.
             * @param {string} message - Message to show.
             */
            s.showInfoMessage = function (message) {
                s._showMessage(message, 'info');
            };
            /**
             * Show warn message.
             * @param {string} message - Message to show.
             */
            s.showWarnMessage = function (message) {
                s._showMessage(message, 'warn');
            };
            /**
             * Show error message.
             * @param {string} message - Message to show.
             */
            s.showErrorMessage = function (message) {
                s._showMessage(message, 'error');
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name urlFormatService
 * @description Url format service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService(apUrlFormatService) {
            var s = this;
            s.__proto__ = apUrlFormatService;
        });

})(angular);

/**
 * @ngdoc module
 * @module ok.templates
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.templates', [
            
        ]);
})(angular);

/**
 * @ngdoc object
 * @name coverHtmlTemplate
 * @description Template for coverHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('coverHtmlTemplate', {
		    "name": "/html/partials/cover.html",
		    "content": "<div>\n    <div ng:show=\"visible\" class=\"cover\">\n        <span class=\"cover-icon-container\">\n        <i class=\"cover-icon fa fa-spinner fa-spin\"></i>\n        </span>\n    </div>\n</div>\n\n\n"
		});

})(angular);
/**
 * @ngdoc object
 * @name faviconHtmlTemplate
 * @description Template for faviconHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('faviconHtmlTemplate', {
		    "name": "/html/partials/favicon.html",
		    "content": "<link rel=\"icon\" href=\"/favicon.png\" />"
		});

})(angular);
/**
 * @ngdoc object
 * @name metaHtmlTemplate
 * @description Template for metaHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('metaHtmlTemplate', {
		    "name": "/html/partials/meta.html",
		    "content": "<!-- Meta HTML -->\n<meta ng:attr-charset=\"UTF-8\">\n<meta name=\"fragment\" content=\"!\">\n<meta name=\"application-name\" content=\"{{l.meta.NAME}}\"/>\n<meta name=\"description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"generator\" content=\"apeman\"/>\n<meta name=\"author\" content=\"{{l.meta.AUTHOR}}\"/>\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"/>\n\n<!-- Open graph tags -->\n<meta property=\"og:title\" content=\"{{page | pageTitleFilter:l}}\"/>\n<meta property=\"og:type\" content=\"website\"/>\n<meta property=\"og:image\" content=\"\"/> <!-- FIXME -->\n<meta property=\"og:url\" content=\"{{app.HOMEPAGE}}\"/>\n<meta property=\"og:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n\n\n<!-- Twitter tags -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"{{page | pageTitleFilter:l}}\">\n<meta name=\"twitter:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"twitter:image\" content=\"\"/> <!-- FIXME -->\n"
		});

})(angular);
/**
 * @ngdoc object
 * @name titleHtmlTemplate
 * @description Template for titleHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('titleHtmlTemplate', {
		    "name": "/html/partials/title.html",
		    "content": "<title ng:bind=\"page | pageTitleFilter:l\"></title>"
		});

})(angular);
/**
 * @ngdoc object
 * @name toastHtmlTemplate
 * @description Template for toastHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('toastHtmlTemplate', {
		    "name": "/html/partials/toast.html",
		    "content": "<div class=\"toast-container\">\n    <div class=\"container\">\n        <div class=\"toast error-toast\" kt:toast kt:toast-messages=\"toasts.error\" kt:icon=\"'exclamation-circle'\"></div>\n        <div class=\"toast warn-toast\" kt:toast kt:toast-messages=\"toasts.warn\" kt:icon=\"'warning'\"></div>\n        <div class=\"toast info-toast\" kt:toast kt:toast-messages=\"toasts.info\" kt:icon=\"'check-circle'\"></div>\n    </div>\n\n\n</div>"
		});

})(angular);

/**
 * @ngdoc module
 * @module ok.utils
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.utils', [
            'ap.utils'
        ]);
})(angular);

/**
 * @ngdoc object
 * @name arrayUtil
 * @description Array util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('arrayUtil', function defineArrayUtil(apArrayUtil) {
            var arrayUtil = {};
            arrayUtil.__proto__ = apArrayUtil;
            return arrayUtil;
        });
})(angular);
/**
 * @ngdoc object
 * @name objectUtil
 * @description Object util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('objectUtil', function defineObjectUtil(apObjectUtil) {
            var u = {};
            u.__proto__ = apObjectUtil;
            return u;
        });
})(angular);
/**
 * @ngdoc object
 * @name stringUtil
 * @description String util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('stringUtil', function defineStringUtil(apStringUtil) {
            var u = {};
            u.__proto__ = apStringUtil;
            return u
        });
})(angular);

