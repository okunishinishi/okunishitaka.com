/**
 * ok templates module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.templates', [
            
        ]);
})(angular);

/**
 * Template for blogBlogAsideContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogAsideContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-aside-content.html",
		    "content": "<div ng:controller=\"BlogAsideCtrl\" >\n    <ul>\n        <li ng:repeat=\"b in blogs\">\n            <a href=\"javascript:void(0)\" ng:click=\"scrollTo('blog-' + b._id)\">{{b.title}}</a>\n        </li>\n    </ul>\n    <a id=\"aside-blog-more-button\" href=\"javascript:void(0)\" ng:click=\"more()\">{{l.buttons.MORE}}</a>\n</div>"
		});

})(angular);
/**
 * Template for blogBlogEditSectionContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditSectionContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-section-content.html",
		    "content": "<div>\n    <div>\n        <input type=\"text\" id=\"blog-title-input\" class=\"wide-input\">\n    </div>\n    <textarea name=\"blog-text\" id=\"blog-text-textarea\" class=\"wide-textarea\" cols=\"30\" rows=\"20\"></textarea>\n\n    <div id=\"blog-edti-preview\"></div>\n    <div class=\"text-center\">\n        <a id=\"blog-cancel-button\" class=\"button\" href=\"\">{{l.buttons.CANCEL}}</a>\n        <a id=\"blog-save-button\" class=\"button\" href=\"\">{{l.buttons.SAVE}}</a>\n    </div>\n</div>\n"
		});

})(angular);
/**
 * Template for blogBlogEditSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-section.html",
		    "content": "<section id=\"blog-edit-section\"\n         ng:class=\"\"\n         ng:controller=\"BlogEditCtrl\" class=\"cover\">\n    <div id=\"blog-edit-section-content\" class=\"container\">\n\n        <a ng:click=\"close()\" id=\"blog-edit-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"\">\n\n        </div>\n        <div class=\"\">\n            <fieldset class=\"no-style-fieldset\">\n                <div>\n                    <input type=\"text\" id=\"blog-title-input\"\n                           placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                           ng:model=\"blog.title\"\n                           class=\"wide-input\">\n                </div>\n                <div>\n                    <label for=\"blog-status-radio-true\">\n                        <input id=\"blog-status-radio-true\"\n                               ng:model=\"blog.status\"\n                               type=\"radio\" name=\"blog-status-radio\" value=\"1\"/>\n                        {{l.labels.blogstatus.PUBLIC}}\n                    </label>\n                    <label for=\"blog-status-radio-false\">\n                        <input id=\"blog-status-radio-false\"\n                               ng:model=\"blog.status\"\n                               type=\"radio\" name=\"blog-status-radio\" value=\"0\"/>\n                        {{l.labels.blogstatus.PRIVATE}}\n                    </label>\n                </div>\n                <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                          placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                          class=\"wide-textarea\" cols=\"30\" rows=\"20\"\n                          ng:model=\"blog.content\"\n                        ></textarea>\n\n                <div class=\"text-center\">\n                    <a id=\"blog-cancel-button\" class=\"button\"\n                       ng:click=\"cancel()\"\n                            >{{l.buttons.CANCEL}}</a>\n                    <a id=\"blog-save-button\" class=\"button\"\n                       ng:click=\"save(blog)\"\n                            >{{l.buttons.SAVE}}</a>\n                </div>\n            </fieldset>\n            <fieldset>\n                <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                <div id=\"blog-edit-preview-div\">\n                    <h2>{{preview.title}}</h2>\n\n                    <div ng:bind-html=\"preview.content\"></div>\n                </div>\n            </fieldset>\n            <br class=\"clear\"/>\n        </div>\n    </div>\n</section>"
		});

})(angular);
/**
 * Template for blogBlogListSectionContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section-content.html",
		    "content": "<div>\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in blogs\" id=\"blog-dt-{{b._id}}\">\n            {{b.title}}\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</div>"
		});

})(angular);
/**
 * Template for blogBlogListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section.html",
		    "content": "<section id=\"blog-list-section\" ng:controller=\"BlogListCtrl\">\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in blogs\">\n            <a class=\"blog-dt-anchor\"\n               name=\"blog-{{b._id}}\">\n                {{b.title}}\n            </a>\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</section>"
		});

})(angular);
/**
 * Template for footerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('footerHtmlTemplate', {
		    "name": "/html/partials/footer.html",
		    "content": "<div class=\"container\" id=\"footer-content\">\n    <small id=\"small-copyright\">Copyright © 2014 Taka Okunishi All Rights Reserved</small>\n</div>\n"
		});

})(angular);
/**
 * Template for headerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('headerHtmlTemplate', {
		    "name": "/html/partials/header.html",
		    "content": "<!-- Header HTML -->\n<div class=\"container\">\n    <h1 class=\"header-logo\" ng-click=\"goTopPage()\">{{l.meta.NAME}}</h1>\n    <nav class=\"header-nav\">\n        <a class=\"nav-item\" href=\"{{pages.INDEX}}\">{{l.pageNames.INDEX}}</a>\n        <a class=\"nav-item\" href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n        <a class=\"nav-item\" href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n    </nav>\n</div>"
		});

})(angular);
/**
 * Template for metaHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('metaHtmlTemplate', {
		    "name": "/html/partials/meta.html",
		    "content": "<!-- Meta HTML -->\n<meta ng:attr-charset=\"UTF-8\">\n<meta name=\"application-name\" content=\"{{l.meta.NAME}}\"/>\n<meta name=\"description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"generator\" content=\"apeman\"/>\n<meta name=\"author\" content=\"{{l.meta.AUTHOR}}\"/>\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"/>\n\n<!-- Open graph tags -->\n<meta property=\"og:title\" content=\"{{title(page)}}\"/>\n<meta property=\"og:type\" content=\"website\"/>\n<meta property=\"og:image\" content=\"\"/> <!-- FIXME -->\n<meta property=\"og:url\" content=\"{{app.HOMEPAGE}}\"/>\n<meta property=\"og:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n\n\n<!-- Twitter tags -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"{{title(page)}}\">\n<meta name=\"twitter:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"twitter:image\" content=\"\"/> <!-- FIXME -->\n\n"
		});

})(angular);
