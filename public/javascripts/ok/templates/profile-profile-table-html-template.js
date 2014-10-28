/**
 * Template for profileProfileTableHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileTableHtmlTemplate', {
		    "name": "/html/partials/profile/profile-table.html",
		    "content": "<table id=\"{{id}}\" class=\"profile-table\">\n    <caption>{{caption}}</caption>\n    <thead>\n    <tr ng:if=\"!!data.head\">\n        <th ng:repeat=\"head in data.head\">{{head}}</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng:repeat=\"row in data.body\" ng:init=\"headed=!!data.headedBody\">\n        <th ng:repeat=\"cell in row\" ng:if=\"(headed && $first)\" ok:linked=\"data.links\" ng:bind=\"cell\"></th>\n        <td ng:repeat=\"cell in row\" ng:if=\"!(headed && $first)\"  ok:linked=\"data.links\" ng:bind=\"cell\"></td>\n    </tr>\n    </tbody>\n</table>"
		});

})(angular);