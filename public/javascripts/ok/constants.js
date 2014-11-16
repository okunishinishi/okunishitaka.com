/**
 * ok constants module.
 * @requires angular
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
		    "SUPPORTED_LANGS": [
		        "ja",
		        "en"
		    ],
		    "VERSION": "0.0.0",
		    "HOMEPAGE": "http://okunishitaka.com",
		    "DOMAIN": "okunishitaka.com",
		    "GA_TRACKING_ID": "UA-56426713-1"
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
		        "CONFLICT_ERROR": 1,
		        "CONNECTION_ERROR": 2,
		        "NOT_FOUND_ERROR": 3,
		        "SERVER_ERROR": 4,
		        "UNEXPECTED_ERROR": 5,
		        "VALIDATION_ERROR": 6
		    },
		    "httpStatusCodes": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
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
		    "en": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "COPY_RIGHT": "Copyright © 2014 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content "
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            },
		            "footer": {
		                "LINKS": "Links"
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
		        "buttons": {
		            "NEW": "Create new",
		            "MORE": "See more",
		            "EDIT": "Edit",
		            "DELETE": "Delete",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "Close",
		            "DETAIL": "See more detail",
		            "TRY_DEMO": "Try demo",
		            "VIEW_SOURCE_CODE": "View the source code",
		            "VISIT_SITE": "Visit the site"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
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
		                    "PERSONEL": "Personel",
		                    "EDUCATION": "Eductation",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            },
		            "admin": {
		                "LOGO": "admin.okunishitaka.com",
		                "ASK_SURE": "Are you sure?",
		                "SAVE_BLOG_DONE": "The entry has been saved.",
		                "DESTROY_BLOG_DONE": "The entry has been deleted."
		            }
		        }
		    },
		    "ja": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "COPY_RIGHT": "Copyright © 2014 Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content "
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            },
		            "footer": {
		                "LINKS": "Links"
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
		        "buttons": {
		            "NEW": "Create new",
		            "MORE": "See more",
		            "EDIT": "Edit",
		            "DELETE": "Delete",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "Close",
		            "DETAIL": "See more detail",
		            "TRY_DEMO": "Try demo",
		            "VIEW_SOURCE_CODE": "View the source code",
		            "VISIT_SITE": "Visit the site"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
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
		                    "PERSONEL": "Personel",
		                    "EDUCATION": "Eductation",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            },
		            "admin": {
		                "LOGO": "admin.okunishitaka.com",
		                "ASK_SURE": "Are you sure?",
		                "SAVE_BLOG_DONE": "The entry has been saved.",
		                "DESTROY_BLOG_DONE": "The entry has been deleted."
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
		    "API_BLOGS_GET": "/api/blogs",
		    "API_BLOGS_POST": "/api/blogs",
		    "API_BLOGS_GET_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_PUT_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_DELETE_WITH_ID": "/api/blogs/:_id",
		    "API_SETTINGS_GET": "/api/settings",
		    "API_SETTINGS_PUT": "/api/settings",
		    "API_PROFILES_GET": "/api/profiles",
		    "API_PROFILES_PUT": "/api/profiles",
		    "API_WORKS_GET": "/api/works"
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
		    "QUALIFICATION_0159_FULL": "/images/qualification/full/qualification_0159_full.jpg",
		    "QUALIFICATION_0160_FULL": "/images/qualification/full/qualification_0160_full.jpg",
		    "QUALIFICATION_0161_FULL": "/images/qualification/full/qualification_0161_full.jpg",
		    "QUALIFICATION_0162_FULL": "/images/qualification/full/qualification_0162_full.jpg",
		    "QUALIFICATION_0163_FULL": "/images/qualification/full/qualification_0163_full.jpg",
		    "QUALIFICATION_0164_FULL": "/images/qualification/full/qualification_0164_full.jpg",
		    "QUALIFICATION_0159": "/images/qualification/qualification_0159.jpg",
		    "QUALIFICATION_0160": "/images/qualification/qualification_0160.jpg",
		    "QUALIFICATION_0161": "/images/qualification/qualification_0161.jpg",
		    "QUALIFICATION_0162": "/images/qualification/qualification_0162.jpg",
		    "QUALIFICATION_0163": "/images/qualification/qualification_0163.jpg",
		    "QUALIFICATION_0164": "/images/qualification/qualification_0164.jpg",
		    "BLOG_SCREENSHOT": "/images/screenshots/blog-screenshot.png",
		    "INDEX_SCREENSHOT": "/images/screenshots/index-screenshot.png",
		    "PROFILE_SCREENSHOT": "/images/screenshots/profile-screenshot.png",
		    "WORK_SCREENSHOT": "/images/screenshots/work-screenshot.png",
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
		    "TIS_HOMEPAGE": "http://www.tis.co.jp/",
		    "REAL_GLOBE_HOMEPAGE": "http://realglobe.jp/",
		    "IPA_HOMEPAGE": "http://www.ipa.go.jp/",
		    "MY_GITHUB": "https://github.com/okunishinishi",
		    "GITHUB_FAVICON": "https://assets-cdn.github.com/favicon.ico",
		    "OKUNISHITAKA_DOT_COM": "http://okunishitaka.com",
		    "WORKS_CHESS": "http://okunishinishi.github.io/ChessTek/",
		    "WORKS_CHESS_REPO": "https://github.com/okunishinishi/ChessTek",
		    "WORKS_CHESS_FAVICON": "http://okunishinishi.github.io/ChessTek/fav.ico",
		    "WORKS_SHOT": "http://okunishinishi.github.io/SHOTek/",
		    "WORKS_SHOT_REPO": "https://github.com/okunishinishi/SHOTek",
		    "WORKS_SHOT_FAVICON": "http://okunishinishi.github.io/SHOTek/fav.ico",
		    "WORKS_CSS_GALLERY": "http://okunishinishi.github.io/css-art-gallery/",
		    "WORKS_CSS_GALLERY_REPO": "https://github.com/okunishinishi/css-art-gallery",
		    "WORKS_CSS_GALLERY_FAVICON": "http://okunishinishi.github.io/css-art-gallery/fav.ico",
		    "WORKS_OTHERO": "http://okunishinishi.github.io/OthelloTek/",
		    "WORKS_OTHERO_REPO": "https://github.com/okunishinishi/OthelloTek",
		    "WORKS_OTHERO_FAVICON": "http://okunishinishi.github.io/OthelloTek/fav.ico",
		    "WORKS_TYPE": "http://okunishinishi.github.io/TouchTypeTraining/",
		    "WORKS_TYPE_REPO": "https://github.com/okunishinishi/TouchTypeTraining",
		    "WORKS_TYPE_FAVICON": "http://okunishinishi.github.io/TouchTypeTraining/fav.ico",
		    "WORKS_MOCK_MONKEY": "http://mockmonkey.demo.okunishitaka.com/",
		    "WORKS_MOCK_MONKEY_REPO": "https://github.com/okunishinishi/mock-monkey",
		    "WORKS_MOCK_MONKEY_FAVICON": "http://mockmonkey.demo.okunishitaka.com/fav.ico",
		    "WORKS_FILEDROP": "http://filedrop.demo.okunishitaka.com/",
		    "WORKS_FILEDROP_REPO": "https://github.com/okunishinishi/filedrop",
		    "WORKS_FILEDROP_FAVICON": "http://filedrop.demo.okunishitaka.com/fav.ico",
		    "WORKS_KUROKAWA": "http://kurokawa.demo.okunishitaka.com/",
		    "WORKS_KUROKAWA_REPO": "https://github.com/okunishinishi/kurokawa",
		    "WORKS_KUROKAWA_FAVICON": "http://kurokawa.demo.okunishitaka.com/fav.ico",
		    "WORKS_SELLIT": "http://sellit.demo.okunishitaka.com/",
		    "WORKS_SELLIT_REPO": "https://github.com/okunishinishi/sellit",
		    "WORKS_SELLIT_FAVICON": "http://sellit.demo.okunishitaka.com/fav.ico",
		    "WORKS_OKUNISHITAKA": "http://okunishitaka.com/",
		    "WORKS_OKUNISHITAKA_REPO": "https://github.com/okunishinishi/okunishitaka.com",
		    "WORKS_OKUNISHITAKA_FAVICON": "http://okunishitaka.com/favicon.png"
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
		    "ADMIN_BLOG_EDITOR_SECTION": "/html/partials/admin/admin-blog-editor-section.html",
		    "ADMIN_BLOG_LIST_SECTION": "/html/partials/admin/admin-blog-list-section.html",
		    "ADMIN_HEADER": "/html/partials/admin/admin-header.html",
		    "BLOG_ASIDE_CONTENT": "/html/partials/blog/blog-aside-content.html",
		    "BLOG_LIST_SECTION": "/html/partials/blog/blog-list-section.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "INDEX_CONTENT_TITLE": "/html/partials/index/index-content-title.html",
		    "INDEX_SEE_MORE_BUTTON": "/html/partials/index/index-see-more-button.html",
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


