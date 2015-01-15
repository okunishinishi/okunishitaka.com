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
		        "placeholders": {
		            "blog": {
		                "TITLE": "タイトル",
		                "CONTENT": "コンテンツ",
		                "TAGS": "タグ (カンマ区切り)"
		            }
		        },
		        "toasts": {
		            "SAVE_DONE": "保存しました。",
		            "DESTROY_DONE": "削除しました。"
		        },
		        "buttons": {
		            "MORE": "もっと読み込む",
		            "EDIT": "編集",
		            "DESTROY": "削除",
		            "SAVE": "保存",
		            "CANCEL": "キャンセル"
		        },
		        "messages": {
		            "SURE_TO_DESTROY": "削除してよろしいですか？"
		        },
		        "pages": {
		            "admin": {
		                "TITLE": "admin.okunishitaka.com"
		            },
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
		    "ADMIN": "/admin.html",
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
		    "ADMIN_BLOG_EDIT_SECTION": "/html/partials/admin/admin-blog-edit-section.html",
		    "ADMIN_BLOG_LIST_SECTION": "/html/partials/admin/admin-blog-list-section.html",
		    "ADMIN_HEADER": "/html/partials/admin/admin-header.html",
		    "BLOG_DETAIL_SECTION": "/html/partials/blog/blog-detail-section.html",
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
		    "work.LIST": "partialUrlConstant.WORK_WORK_LIST_VIEW",
		    "admin.BLOG": "partialUrlConstant.ADMIN_ADMIN_BLOG_VIEW"
		});

})(angular);


