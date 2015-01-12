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