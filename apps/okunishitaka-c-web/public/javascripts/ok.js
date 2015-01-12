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
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "labels": {},
		        "buttons": {
		            "MORE": "もっと読み込む"
		        },
		        "pages": {
		            "index": {
		                "CAPTION": [
		                    "Homepage of Taka Okunishi"
		                ],
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name",
		                "captions": {
		                    "ABOUT": "About",
		                    "DREAM": "Dream",
		                    "BASICS": "Basics",
		                    "EDUCATION": "Education",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            }
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
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
		    "API_BLOG_TAG_GET": "/api/blog-tag",
		    "API_PROFILE_GET": "/api/profile",
		    "API_WORK_GET": "/api/work"
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
		    "ME": "/images/me.jpg",
		    "OKUNISHITAKA": "/images/okunishitaka.com-favicon.png",
		    "QUALIFICATION_0159": "/images/qualification/qualification_0159.jpg",
		    "QUALIFICATION_0159_FULL": "/images/qualification/full/qualification_0159_full.jpg",
		    "QUALIFICATION_0160": "/images/qualification/qualification_0160.jpg",
		    "QUALIFICATION_0160_FULL": "/images/qualification/full/qualification_0160_full.jpg",
		    "QUALIFICATION_0161": "/images/qualification/qualification_0161.jpg",
		    "QUALIFICATION_0161_FULL": "/images/qualification/full/qualification_0161_full.jpg",
		    "QUALIFICATION_0162": "/images/qualification/qualification_0162.jpg",
		    "QUALIFICATION_0162_FULL": "/images/qualification/full/qualification_0162_full.jpg",
		    "QUALIFICATION_0163": "/images/qualification/qualification_0163.jpg",
		    "QUALIFICATION_0163_FULL": "/images/qualification/full/qualification_0163_full.jpg",
		    "QUALIFICATION_0164": "/images/qualification/qualification_0164.jpg",
		    "QUALIFICATION_0164_FULL": "/images/qualification/full/qualification_0164_full.jpg",
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
        .constant('jsonUrlConstant', {
		    "PROFILE": "/json/profile.json",
		    "WORKS": "/json/works.json"
		});

})(angular);


/**
 * Constant for linkUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('linkUrlConstant', {
		    "ABOUT_MARK_DOWN": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
		    "GITHUB_FAVICON": "https://assets-cdn.github.com/favicon.ico",
		    "IPA_HOMEPAGE": "http://www.ipa.go.jp/",
		    "MY_GITHUB": "https://github.com/okunishinishi",
		    "OKUNISHITAKA_DOT_COM": "http://okunishitaka.com",
		    "REAL_GLOBE_HOMEPAGE": "http://realglobe.jp/",
		    "TIS_HOMEPAGE": "http://www.tis.co.jp/",
		    "WORKS_CHESS": "http://okunishinishi.github.io/ChessTek/",
		    "WORKS_CHESS_FAVICON": "http://okunishinishi.github.io/ChessTek/fav.ico",
		    "WORKS_CHESS_REPO": "https://github.com/okunishinishi/ChessTek",
		    "WORKS_CSS_GALLERY": "http://okunishinishi.github.io/css-art-gallery/",
		    "WORKS_CSS_GALLERY_FAVICON": "http://okunishinishi.github.io/css-art-gallery/fav.ico",
		    "WORKS_CSS_GALLERY_REPO": "https://github.com/okunishinishi/css-art-gallery",
		    "WORKS_FILEDROP": "http://filedrop.demo.okunishitaka.com/",
		    "WORKS_FILEDROP_FAVICON": "http://filedrop.demo.okunishitaka.com/fav.ico",
		    "WORKS_FILEDROP_REPO": "https://github.com/okunishinishi/filedrop",
		    "WORKS_KUROKAWA": "http://kurokawa.demo.okunishitaka.com/",
		    "WORKS_KUROKAWA_FAVICON": "http://kurokawa.demo.okunishitaka.com/fav.ico",
		    "WORKS_KUROKAWA_REPO": "https://github.com/okunishinishi/kurokawa",
		    "WORKS_MOCK_MONKEY": "http://mockmonkey.demo.okunishitaka.com/",
		    "WORKS_MOCK_MONKEY_FAVICON": "http://mockmonkey.demo.okunishitaka.com/fav.ico",
		    "WORKS_MOCK_MONKEY_REPO": "https://github.com/okunishinishi/mock-monkey",
		    "WORKS_OKUNISHITAKA": "http://okunishitaka.com/",
		    "WORKS_OKUNISHITAKA_FAVICON": "http://okunishitaka.com/favicon.png",
		    "WORKS_OKUNISHITAKA_REPO": "https://github.com/okunishinishi/okunishitaka.com",
		    "WORKS_OTHERO": "http://okunishinishi.github.io/OthelloTek/",
		    "WORKS_OTHERO_FAVICON": "http://okunishinishi.github.io/OthelloTek/fav.ico",
		    "WORKS_OTHERO_REPO": "https://github.com/okunishinishi/OthelloTek",
		    "WORKS_SELLIT": "http://sellit.demo.okunishitaka.com/",
		    "WORKS_SELLIT_FAVICON": "http://sellit.demo.okunishitaka.com/fav.ico",
		    "WORKS_SELLIT_REPO": "https://github.com/okunishinishi/sellit",
		    "WORKS_SHOT": "http://okunishinishi.github.io/SHOTek/",
		    "WORKS_SHOT_FAVICON": "http://okunishinishi.github.io/SHOTek/fav.ico",
		    "WORKS_SHOT_REPO": "https://github.com/okunishinishi/SHOTek",
		    "WORKS_TYPE": "http://okunishinishi.github.io/TouchTypeTraining/",
		    "WORKS_TYPE_FAVICON": "http://okunishinishi.github.io/TouchTypeTraining/fav.ico",
		    "WORKS_TYPE_REPO": "https://github.com/okunishinishi/TouchTypeTraining"
		});

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
		    "BLOG": "/blog.html",
		    "INDEX": "/index.html",
		    "PROFILE": "/profile.html",
		    "WORK": "/work.html"
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
		    "BLOG_LIST_SECTION": "/html/partials/blog/blog-list-section.html",
		    "COVER": "/html/partials/cover.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "INDEX_CAPTION_SECTION": "/html/partials/index/index-caption-section.html",
		    "INDEX_CONTENT_TITLE": "/html/partials/index/index-content-title.html",
		    "INDEX_SEE_MORE_BUTTON": "/html/partials/index/index-see-more-button.html",
		    "INDEX_TITLE_SECTION": "/html/partials/index/index-title-section.html",
		    "META": "/html/partials/meta.html",
		    "PROFILE_LIST": "/html/partials/profile/profile-list.html",
		    "PROFILE_TABLE": "/html/partials/profile/profile-table.html",
		    "SOCIAL": "/html/partials/social.html",
		    "TITLE": "/html/partials/title.html",
		    "TOAST": "/html/partials/toast.html",
		    "TRACK": "/html/partials/track.html",
		    "WORK_LINK": "/html/partials/work/work-link.html",
		    "WORK_LIST": "/html/partials/work/work-list.html"
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
		    "profile.LIST": "partialUrlConstant.PROFILE_PROFILE_LIST_VIEW",
		    "blog.LIST": "partialUrlConstant.BLOG_BLOG_LIST_VIEW",
		    "work.LIST": "partialUrlConstant.WORK_WORK_LIST_VIEW"
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
 * @name okButton
 * @description Ok button.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okButton', function defineOkButton() {
            return {
                scope: {
                    type: '=okButtonType'
                },
                link: function (scope, elm, attr) {
                    var $elm = $(elm);
                    $elm.addClass('button')
                        .attr({
                            href: $elm.attr('href') || 'javascript:void(0)'
                        }
                    );
                    switch (scope.type) {
                        case 'button-primary':
                        case 'primary':
                            $elm.addClass('button-primary');
                            break;
                        case 'link':
                            $elm.addClass('link-button');
                            break;
                    }
                }
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okCover
 * @description Ok cover.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okCover', function defineOkCover(partialUrlConstant) {
            return {
                scope: {
                    visible: '=okCoverVisible'
                },
                templateUrl: partialUrlConstant.COVER
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okFacebookButton
 * @description Ok facebook button.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFacebookButton', function defineOkFacebookButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=520712554606371&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
            }

            return {
                scope: {
                    href: '=okHref'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            var root = $('#fb-root');
                            if (!root.length) {
                                $('<div />').attr('id', 'fb-root').insertAfter($(elm));
                            }
                            loadSDK(document, 'script', 'facebook-jssdk');
                        }
                    }
                },
                template: '<div class="fb-like" data-href="{{href}}" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>'
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okFadeIn
 * @description Ok fade in.
*/
(function (ng, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFadeIn', function defineOkFadeIn($timeout) {
            return {
                scope: {
                    duration: '=okDuration',
                    delay: '=okDelay'
                },
                compile: function () {
                    return {
                        pre: function (scope, elm) {
                            $(elm).hide();
                        },
                        post: function (scope, elm) {
                            var delay = Number(scope.delay || 0),
                                duration = Number(scope.duration || 0);
                            $timeout(function () {
                                $(elm).fadeIn(duration);
                            }, delay);
                        }
                    }
                }
            }
        });

})(angular, jQuery);
/**
 * @ngdoc directive
 * @name okGoogleAnalytics
 * @description Ok google analytics.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okGoogleAnalytics', function defineOkGoogleAnalytics() {
            function loadSDK(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            }

            return {
                scope: {
                    trackingId: '=okTrackingId'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            loadSDK(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                            ga('create', scope.trackingId, 'auto');
                            ga('send', 'pageview');
                        }
                    }
                }
            }
        });

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
 * @name okScrollToFixed
 * @description Ok scroll to fixed.
 */
(function (ng, $) {
    "use strict";

    var name = 'okScrollToFixed';
    ng
        .module('ok.directives')
        .directive(name, function defineOkScrollToFixed($window, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);

                            var top, fixed = false, ready = false;
                            var window = $($window);
                            var content = $(attr[name]);

                            function clear() {
                                ready = false;
                                fixed = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            }

                            function update() {
                                if (!ready) {
                                    top = positionUtil.offsetSum(elm).top;
                                    elm.height(elm.height());
                                    ready = true;
                                }
                                var winTop = window.scrollTop();
                                var needsFix = top < winTop;
                                if (fixed != needsFix) {
                                    fixed = needsFix;
                                    content.toggleClass('ok-fixed', fixed);
                                }
                            }

                            window.resize(function () {
                                clear();
                                update();
                            });
                            window.scroll(function () {
                                update();
                            });

                        }
                    }
                }
            }
        });

})(angular, jQuery);
/**
 * @ngdoc directive
 * @name okScrollToStay
 * @description Ok scroll to stay.
 */
(function (ng) {
    "use strict";
    var name = 'okScrollToStay';
    ng
        .module('ok.directives')
        .directive(name, function defineOkScrollToStay($window, $document, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);
                            var window = $($window),
                                content = $(attr[name]);

                            var ready = false,
                                winHeight,
                                contentHeight,
                                scrollHeight,
                                _contentTop;

                            function clear() {
                                ready = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            }

                            function update() {
                                if (!content.length) {
                                    content = $(attr[name]);
                                }
                                if (!ready) {
                                    elm.height(elm.height());
                                    elm.width(elm.width());
                                    content.addClass('ok-fixed');
                                    winHeight = window.height();
                                    contentHeight = content.outerHeight(true);
                                    scrollHeight = $('body,html').prop('scrollHeight');
                                    _contentTop = null;

                                    ready = true;
                                }
                                var scrollRate = window.scrollTop() / (scrollHeight - winHeight);
                                var contentTop = Math.round((contentHeight - winHeight) * scrollRate);
                                if (contentTop < 0) contentTop = 0;

                                if (_contentTop != contentTop) {
                                    content.css({
                                        top: -contentTop
                                    });
                                    _contentTop = contentTop;
                                }
                            }

                            window.scroll(function () {
                                update();
                            });
                            window.resize(function () {
                                clear();
                                update();
                            });
                            clear();
                        }
                    }
                }
            }
        });


})(angular);
/**
 * @ngdoc directive
 * @name okTag
 * @description Ok tag.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTag', function defineOkTag() {
            return {
                scope: {
                    title: '=okTitle'
                },
                link: function (scope, elm) {
                },
                template: [
                    '<span class="ok-tag" style="border-color: {{title | tagColorFilter}};color:{{title | tagColorFilter}};">',
                    '<span class="ok-tag-icon" style="background-color: {{title | tagColorFilter}};"></span>',
                    '{{title}}',
                    '</span>'
                ].join('')
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
                scope: {
                    'messages': '=okToastMessages',
                    'icon': '=okIcon'
                },
                link: function (scope, elm) {
                    elm.addClass('ok-toast');
                    scope.$watch('messages', function (messages) {
                        var hasMessage = !!messages && (messages.length > 0);
                        elm.toggleClass('ok-toast-visible', hasMessage);
                        scope.data = [].concat(messages).map(function (message) {
                            return {message: message};
                        });
                    }, true);
                },
                template: [
                    '<div ng-repeat="d in data"><i class="ok-toast-icon fa fa-{{icon}}"></i>{{d.message}}</div>'
                ].join('')
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okTwitterButton
 * @description Ok twitter button.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTwitterButton', function defineOkTwitterButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }

            return {
                scope: {
                    href: '=okHref',
                    via: '=okVia'
                },
                compile: function () {
                    return {
                        post: function (scope, elm) {
                            loadSDK(document, 'script', 'twitter-wjs');
                        }
                    }
                },
                template: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="{{href}}" data-via="{{via}}">Tweet</a>'
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
 * @ngdoc Object
 * @name ProfileEntity
 * @description Profile entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('ProfileEntity', function defineProfileEntity(Entity) {

            /**
             * @augments Entity
             * @constructor ProfileEntity
             * @param {object} data - Entity data.
             */
            var ProfileEntity = Entity.define(
                /** @lends ProfileEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            ProfileEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            ProfileEntity.new = function (data) {
                var entity = new ProfileEntity(data);
                return entity;
            };

            return ProfileEntity;

        });

})(angular);
/**
 * @ngdoc Object
 * @name WorkEntity
 * @description Work entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('WorkEntity', function defineWorkEntity(Entity) {

            /**
             * @augments Entity
             * @constructor WorkEntity
             * @param {object} data - Entity data.
             */
            var WorkEntity = Entity.define(
                /** @lends WorkEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            WorkEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            WorkEntity.new = function (data) {
                var entity = new WorkEntity(data);
                return entity;
            };

            return WorkEntity;

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
            'ok.services',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, moment) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                return moment(date).format('YYYY/MM/DD');
            };
        });
})(angular, moment);
/**
 * @ngdoc filter
 * @filter markdownRenderFilter
 * @description Markdown render filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('markdownRenderFilter', function defineMarkdownRenderFilter(markdownRenderService) {
            return function markdownRenderFilter(text) {
                return markdownRenderService.render(text);
            };
        });
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
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, one) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var _cached = _cache[seed];
                if (_cached) {
                    return _cached;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 41 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, one);
/**
 * @ngdoc filter
 * @filter textLinkFilter
 * @description Text link filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textLinkFilter', function defineTextLinkFilter(linkUrlConstant, imageUrlConstant) {
            return function textLinkFilter(text, links) {
                var html = String(text);
                Object.keys(links || {}).forEach(function (key) {
                    html = html.replace(new RegExp(key, 'g'), function (text) {
                        var name = links[key],
                            href = linkUrlConstant[name] || imageUrlConstant[name];
                        if (href) {
                            return '<a href="' + href + '">' + text + '</a>';
                        } else {
                            return text;
                        }
                    });
                });
                return html;
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
                get linkUrlConstant() { return $injector.get('linkUrlConstant'); },
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
                get Entity() { return $injector.get('Entity'); },
                get ProfileEntity() { return $injector.get('ProfileEntity'); },
                get WorkEntity() { return $injector.get('WorkEntity'); }
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
                get profileApiService() { return $injector.get('profileApiService'); },
                get workApiService() { return $injector.get('workApiService'); },
                get codeConvertService() { return $injector.get('codeConvertService'); },
                get errorHandleService() { return $injector.get('errorHandleService'); },
                get eventEmitService() { return $injector.get('eventEmitService'); },
                get langDetectService() { return $injector.get('langDetectService'); },
                get localStorageService() { return $injector.get('localStorageService'); },
                get localeStoreService() { return $injector.get('localeStoreService'); },
                get locationChangeService() { return $injector.get('locationChangeService'); },
                get locationResolveService() { return $injector.get('locationResolveService'); },
                get locationSearchService() { return $injector.get('locationSearchService'); },
                get markdownRenderService() { return $injector.get('markdownRenderService'); },
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
                get blogBlogListSectionHtmlTemplate() { return $injector.get('blogBlogListSectionHtmlTemplate'); },
                get coverHtmlTemplate() { return $injector.get('coverHtmlTemplate'); },
                get faviconHtmlTemplate() { return $injector.get('faviconHtmlTemplate'); },
                get footerHtmlTemplate() { return $injector.get('footerHtmlTemplate'); },
                get headerHtmlTemplate() { return $injector.get('headerHtmlTemplate'); },
                get indexIndexCaptionSectionHtmlTemplate() { return $injector.get('indexIndexCaptionSectionHtmlTemplate'); },
                get indexIndexContentTitleHtmlTemplate() { return $injector.get('indexIndexContentTitleHtmlTemplate'); },
                get indexIndexSeeMoreButtonHtmlTemplate() { return $injector.get('indexIndexSeeMoreButtonHtmlTemplate'); },
                get indexIndexTitleSectionHtmlTemplate() { return $injector.get('indexIndexTitleSectionHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); },
                get profileProfileListHtmlTemplate() { return $injector.get('profileProfileListHtmlTemplate'); },
                get profileProfileTableHtmlTemplate() { return $injector.get('profileProfileTableHtmlTemplate'); },
                get socialHtmlTemplate() { return $injector.get('socialHtmlTemplate'); },
                get titleHtmlTemplate() { return $injector.get('titleHtmlTemplate'); },
                get toastHtmlTemplate() { return $injector.get('toastHtmlTemplate'); },
                get trackHtmlTemplate() { return $injector.get('trackHtmlTemplate'); },
                get workWorkLinkHtmlTemplate() { return $injector.get('workWorkLinkHtmlTemplate'); },
                get workWorkListHtmlTemplate() { return $injector.get('workWorkListHtmlTemplate'); }
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
                get hashUtil() { return $injector.get('hashUtil'); },
                get objectUtil() { return $injector.get('objectUtil'); },
                get positionUtil() { return $injector.get('positionUtil'); },
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
 * @ngdoc Service
 * @name profileApiService
 * @description Profile api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.API_PROFILE_GET, {_id: _id});
                return apiService.get(url);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name workApiService
 * @description Work api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_WORK_GET, params);
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
 * @name markdownRenderService
 * @description Markdown render service.
 */
(function (ng, marked) {
    "use strict";

    ng
        .module('ok.services')
        .service('markdownRenderService', function MarkdownRenderService() {
            var s = this;

            /**
             * Render a markdown text.
             * @param {string} text - Text to render.
             * @returns {string} - Rendered text.
             */
            s.render = function (text) {
                return marked(text || '');
            };

        });

})(angular, marked);
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
 * @name blogBlogListSectionHtmlTemplate
 * @description Template for blogBlogListSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section.html",
		    "content": "<section id=\"blog-list-section\" ng:controller=\"BlogListCtrl\">\n    <dl id=\"blog-list\" class=\"cover-container\">\n        <div ok:cover ok:cover-visible=\"loading\"></div>\n        <dt ng:repeat-start=\"b in blogs\">\n            <a class=\"blog-dt-anchor blog-title\"\n               name=\"blog-{{b._id}}\">\n                {{b.blog_title}}\n            </a>\n            <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n            <span class=\"display-block\">\n                <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tag_texts) track by $index\"></span>\n            </span>\n        </dt>\n        <dd ng:repeat-end=\"\" ng:bind-html=\"b.blog_content | markdownRenderFilter\"></dd>\n    </dl>\n    <a id=\"blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"hasMore\"\n       ng:click=\"loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

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
 * @name footerHtmlTemplate
 * @description Template for footerHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('footerHtmlTemplate', {
		    "name": "/html/partials/footer.html",
		    "content": "<footer>\n    <div class=\"container\" id=\"footer-content\">\n        <small id=\"small-copyright\">{{l.meta.COPY_RIGHT}}</small>\n\n        <div class=\"float-right\">\n            <a ng:href=\"{{links.MY_GITHUB}}\">Repo on GitHub</a>\n        </div>\n    </div>\n</footer>\n"
		});

})(angular);
/**
 * @ngdoc object
 * @name headerHtmlTemplate
 * @description Template for headerHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('headerHtmlTemplate', {
		    "name": "/html/partials/header.html",
		    "content": "<!-- Header HTML -->\n<header>\n\n    <div class=\"container\">\n        <nav class=\"header-nav\">\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='profile'}\"\n               ng:href=\"{{pages.PROFILE}}\">{{l.pageNames.PROFILE}}</a>\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='blog'}\"\n               ng:href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='work'}\"\n               ng:href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n        </nav>\n        <h1 class=\"header-logo\" ng:click=\"changeToTopPage();\">{{l.meta.NAME}}</h1>\n    </div>\n</header>\n"
		});

})(angular);
/**
 * @ngdoc object
 * @name indexIndexCaptionSectionHtmlTemplate
 * @description Template for indexIndexCaptionSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexCaptionSectionHtmlTemplate', {
		    "name": "/html/partials/index/index-caption-section.html",
		    "content": "<section class=\"container\" id=\"index-caption-section\">\n    <div id=\"page-caption\" ng:click=\"changeToTopPage();\">\n        <div id=\"page-caption-inner\">\n            <div ng:repeat=\"c in l.pages.index.CAPTION\">{{c}}</div>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * @ngdoc object
 * @name indexIndexContentTitleHtmlTemplate
 * @description Template for indexIndexContentTitleHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexContentTitleHtmlTemplate', {
		    "name": "/html/partials/index/index-content-title.html",
		    "content": "<h1 class=\"content-section-title\">{{title}}</h1>\n<span class=\"content-section-subtitle\">{{subtitle}}</span>"
		});

})(angular);
/**
 * @ngdoc object
 * @name indexIndexSeeMoreButtonHtmlTemplate
 * @description Template for indexIndexSeeMoreButtonHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexSeeMoreButtonHtmlTemplate', {
		    "name": "/html/partials/index/index-see-more-button.html",
		    "content": "<a class=\"see-more-button\" href=\"{{href}}\">\n    <span class=\"see-more-button-label\">\n        <span class=\"see-more-button-label-inner fa fa-angle-right\"></span>\n    </span>\n</a>"
		});

})(angular);
/**
 * @ngdoc object
 * @name indexIndexTitleSectionHtmlTemplate
 * @description Template for indexIndexTitleSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexTitleSectionHtmlTemplate', {
		    "name": "/html/partials/index/index-title-section.html",
		    "content": "<section id=\"title-section\" ok:scroll-to-stay=\"#title-section-inner\" style=\"\">\n    <div id=\"title-section-inner\">\n        <div id=\"main-title\">\n            <div class=\"container\">\n                    <span id=\"main-title-text\" class=\"outlined-text-white\">\n                        {{l.pages.index.TITLE}}\n                    </span>\n            </div>\n        </div>\n    </div>\n</section>"
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
 * @name profileProfileListHtmlTemplate
 * @description Template for profileProfileListHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileListHtmlTemplate', {
		    "name": "/html/partials/profile/profile-list.html",
		    "content": "<h3 class=\"caption\">{{caption}}</h3>\n<ul id=\"{{id}}\" ng:class=\"{'no-border-list':data.plain}\">\n    <li ng:repeat=\"line in data.lines\"\n        ng:bind-html=\"line | textLinkFilter:data.links\"></li>\n</ul>"
		});

})(angular);
/**
 * @ngdoc object
 * @name profileProfileTableHtmlTemplate
 * @description Template for profileProfileTableHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileTableHtmlTemplate', {
		    "name": "/html/partials/profile/profile-table.html",
		    "content": "<table id=\"{{id}}\" class=\"profile-table\">\n    <caption>{{caption}}</caption>\n    <thead>\n    <tr ng:if=\"!!data.head\">\n        <th ng:repeat=\"head in data.head\">{{head}}</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng:repeat=\"row in data.body\" ng:init=\"headed=!!data.headedBody\">\n        <th ng:repeat=\"cell in row\" ng:if=\"(headed && $first)\"\n            ng:bind-html=\"cell | textLinkFilter:data.links\"></th>\n        <td ng:repeat=\"cell in row\" ng:if=\"!(headed && $first)\">\n            <span ng:hide=\"cell.image\"\n                  ng:bind-html=\"cell | textLinkFilter:data.links\"></span>\n            <span ng:show=\"cell.image\"><a href=\"{{images[cell.image]}}\" target=\"_blank\">{{cell.title}}</a></span>\n        </td>\n    </tr>\n    </tbody>\n</table>"
		});

})(angular);
/**
 * @ngdoc object
 * @name socialHtmlTemplate
 * @description Template for socialHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('socialHtmlTemplate', {
		    "name": "/html/partials/social.html",
		    "content": "<div id=\"social-buttons-container\" class=\"container\">\n    <div ok:fade-in ok:duration=\"400\" ok:delay=\"800\">\n\n        <div class=\"button-container\" id=\"facebook-button-container\">\n            <div ok:facebook-button ok:href=\"links['OKUNISHITAKA_DOT_COM']\"></div>\n        </div>\n\n\n        <div class=\"button-container\" id=\"twitter-button-container\">\n            <div ok:twitter-button ok:href=\"links['OKUNISHITAKA_DOT_COM']\" ok:via=\"okunishinishi\"></div>\n        </div>\n\n        <br class=\"clear-both\"/>\n    </div>\n</div>"
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
		    "content": "<div class=\"toast-container\">\n    <div class=\"container\">\n        <div class=\"toast error-toast\" ok:toast ok:toast-messages=\"toasts.error\" ok:icon=\"'exclamation-circle'\"></div>\n        <div class=\"toast warn-toast\" ok:toast ok:toast-messages=\"toasts.warn\" ok:icon=\"'warning'\"></div>\n        <div class=\"toast info-toast\" ok:toast ok:toast-messages=\"toasts.info\" ok:icon=\"'check-circle'\"></div>\n    </div>\n\n\n</div>"
		});

})(angular);
/**
 * @ngdoc object
 * @name trackHtmlTemplate
 * @description Template for trackHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('trackHtmlTemplate', {
		    "name": "/html/partials/track.html",
		    "content": "<div ok:google-analytics ok:tracking-id=\"app.GA_TRACKING_ID\"></div>"
		});

})(angular);
/**
 * @ngdoc object
 * @name workWorkLinkHtmlTemplate
 * @description Template for workWorkLinkHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkLinkHtmlTemplate', {
		    "name": "/html/partials/work/work-link.html",
		    "content": "<a ng:href=\"{{links[href]}}\"\n   ng:if=\"!!links[href]\"\n   class=\"work-link work-white-back\"><span class=\"work-link-icon-container\"><img\n        ng:if=\"!!links[icon]\"\n        ng:src=\"{{links[icon]}}\"\n        class=\"work-link-icon\"/></span>{{title}}<span\n        class=\"work-link-disclosure fa fa-angle-right\"></span></a>"
		});

})(angular);
/**
 * @ngdoc object
 * @name workWorkListHtmlTemplate
 * @description Template for workWorkListHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkListHtmlTemplate', {
		    "name": "/html/partials/work/work-list.html",
		    "content": "<ul id=\"work-list\">\n\n    <li ng:repeat=\"work in works\" class=\"work-list-item\">\n\n        <div class=\"work-background-image-container\">\n            <a ng:href=\"{{hrefForWork(work)}}\" class=\"image-link\">\n                <img ng:src=\"{{images[work.thumbnail]}}\" class=\"work-background-image\">\n            </a>\n        </div>\n\n        <h3 class=\"work-list-item-title work-white-back theme-font\">\n            <a ng:href=\"{{hrefForWork(work)}}\">{{work.name}}<img class=\"work-list-favicon\"\n                                                                 ng:src=\"{{links[work.favicon]}}\"\n                                                                 ng:if=\"!!links[work.favicon]\"/>\n            </a>\n        </h3>\n\n        <div class=\"work-list-item-content\">\n            <div class=\"work-description work-white-back\">\n                <div class=\"work-tags-container\">\n                    <span ok:tag ok:title=\"t\" ng:repeat=\"t in work.tag\"></span>\n                </div>\n\n                <div ng:repeat=\"d in work.description\">{{d}}</div>\n            </div>\n\n            <div ok:work-link ok:work-href=\"work.link\" ok:work-title=\"l.buttons.VISIT_SITE\"\n                 ok:work-icon=\"work.favicon\">\n            </div>\n            <div ok:work-link ok:work-href=\"work.demo\" ok:work-title=\"l.buttons.TRY_DEMO\"\n                 ok:work-icon=\"work.favicon\">\n            </div>\n            <div ok:work-link ok:work-href=\"work.repo\" ok:work-title=\"l.buttons.VIEW_SOURCE_CODE\"\n                 ok:work-icon=\"work.repoFavicon\">\n            </div>\n        </div>\n\n    </li>\n    <li class=\"clear-both\"></li>\n</ul>"
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
 * @name hashUtil
 * @description Hash util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('hashUtil', function defineHashUtil() {
            return {
                /**
                 * Get hash code for string value.
                 * @param {string} value - String to hash.
                 * @returns {number} - Hash code.
                 */
                toHashCode: function (value) {
                    return value.split("").reduce(function (a, b) {
                        a = ((a << 5) - a) + b.charCodeAt(0);
                        return a & a
                    }, 0);
                }
            }
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
 * @name positionUtil
 * @description Position util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('positionUtil', function definePositionUtil() {
            return {
                /**
                 * Get offset from window.
                 * @param {HTMLElement} elm
                 * @returns {{top: number, left: number}}
                 */
                offsetSum: function (elm) {
                    var top = 0, left = 0;
                    if (elm[0]) elm = elm[0]; //Remove jquery.
                    while (elm) {
                        top = top + parseInt(elm.offsetTop, 10);
                        left = left + parseInt(elm.offsetLeft, 10);
                        elm = elm.offsetParent;
                    }
                    return {top: top, left: left};
                }
            }
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

