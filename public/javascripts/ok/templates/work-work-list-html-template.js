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
		    "content": "<ul id=\"work-list\" ng:controller=\"WorkListCtrl\">\n\n    <li ng:repeat=\"work in works\" class=\"work-list-item\">\n\n        <div class=\"work-background-image-container\">\n            <img ng:src=\"{{images[work.thumbnail]}}\" class=\"work-background-image\">\n        </div>\n\n        <h3 class=\"work-list-item-title\">\n            <a ng:href=\"{{links[work.link]}}\">{{work.name}}</a>\n        </h3>\n\n        <div class=\"work-thumbnail-image-container\">\n            <a ng:href=\"{{links[work.link]}}\">\n                <img ng:src=\"{{images[work.thumbnail]}}\" class=\"work-thumbnail-image\">\n            </a>\n        </div>\n\n        <div class=\"work-list-item-content\">\n            <div class=\"work-description\">\n                <div ng:repeat=\"d in work.description\">{{d}}</div>\n            </div>\n        </div>\n    </li>\n    <li class=\"clear-both\"></li>\n</ul>"
		});

})(angular);