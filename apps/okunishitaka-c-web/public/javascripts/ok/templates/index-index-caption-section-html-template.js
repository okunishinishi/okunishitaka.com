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