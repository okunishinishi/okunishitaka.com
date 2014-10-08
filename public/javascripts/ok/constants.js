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
		    "HOMEPAGE": "http://okunishitaka.com"
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
		            "AUTHOR": "Taka Okunishi"
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
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "buttons": {
		            "MORE": "See more",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "close"
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
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name"
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            }
		        }
		    },
		    "ja": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi"
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
		            }
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "buttons": {
		            "MORE": "See more",
		            "CANCEL": "Cancel",
		            "SAVE": "Save",
		            "CLOSE": "close"
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
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name"
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
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
		    "BLOGS_GET": "/blogs",
		    "BLOGS_POST": "/blogs",
		    "BLOGS_GET_WITH_ID": "/blogs/:_id",
		    "BLOGS_PUT_WITH_ID": "/blogs/:_id",
		    "BLOGS_DELETE_WITH_ID": "/blogs/:_id",
		    "SETTINGS_GET": "/settings",
		    "SETTINGS_PUT": "/settings"
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
		    "BLOG_SCREENSHOT": "/images/screenshots/blog-screenshot.png",
		    "INDEX_SCREENSHOT": "/images/screenshots/index-screenshot.png",
		    "WORK_SCREENSHOT": "/images/screenshots/work-screenshot.png",
		    "WORKS_CHESS_THUMBNAIL": "/images/works/works-chess-thumbnail.png",
		    "WORKS_CSS_GALLERY_THUMBNAIL": "/images/works/works-css-gallery-thumbnail.png",
		    "WORKS_DOC_GALLERY_THUMBNAIL": "/images/works/works-doc-gallery-thumbnail.png",
		    "WORKS_MOCK_MONKEY_THUMBNAIL": "/images/works/works-mock-monkey-thumbnail.png",
		    "WORKS_OTHERO_THUMBNAIL": "/images/works/works-othero-thumbnail.png",
		    "WORKS_PLANING_PORKER_THUMBNAIL": "/images/works/works-planing-porker-thumbnail.png",
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
		    "ABOUT_MARK_DOWN": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
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
		    "BLOG_ASIDE_CONTENT": "/html/partials/blog/blog-aside-content.html",
		    "BLOG_EDIT_SECTION": "/html/partials/blog/blog-edit-section.html",
		    "BLOG_LIST_SECTION": "/html/partials/blog/blog-list-section.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "META": "/html/partials/meta.html"
		});

})(angular);


