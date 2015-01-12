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
