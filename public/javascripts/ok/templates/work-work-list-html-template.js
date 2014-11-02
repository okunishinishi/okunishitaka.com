/**
 * Template for workWorkListHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkListHtmlTemplate', {
		    "name": "/html/partials/work/work-list.html",
		    "content": "<ul id=\"work-list\" ng:controller=\"WorkListCtrl\">\n\n    <li ng:repeat=\"work in works\" class=\"work-list-item\">\n\n        <div class=\"work-background-image-container\">\n            <a ng:href=\"{{links[work.link]}}\" class=\"image-link\">\n                <img ng:src=\"{{images[work.thumbnail]}}\" class=\"work-background-image\">\n            </a>\n        </div>\n\n        <h3 class=\"work-list-item-title work-white-back theme-font\">\n            <a ng:href=\"{{links[work.link]}}\">{{work.name}}</a>\n        </h3>\n\n        <div class=\"work-list-item-content\">\n            <div class=\"work-description work-white-back\">\n                <div ng:repeat=\"d in work.description\">{{d}}</div>\n            </div>\n\n            <div class=\"work-link-container\">\n                <a ng:href=\"{{links[work.link]}}\" class=\"work-link work-white-back\">{{l.pages.work.VISIT_SITE}}<span\n                        class=\"work-link-icon fa fa-angle-right\"></span></a>\n            </div>\n        </div>\n    </li>\n    <li class=\"clear-both\"></li>\n</ul>"
		});

})(angular);