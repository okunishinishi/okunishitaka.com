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
