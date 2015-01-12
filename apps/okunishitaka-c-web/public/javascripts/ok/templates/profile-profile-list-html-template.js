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