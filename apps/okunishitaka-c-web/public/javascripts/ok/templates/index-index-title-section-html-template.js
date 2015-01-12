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