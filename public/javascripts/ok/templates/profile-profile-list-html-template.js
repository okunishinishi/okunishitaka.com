/**
 * Template for profileProfileListHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileListHtmlTemplate', {
		    "name": "/html/partials/profile/profile-list.html",
		    "content": "<h3 class=\"caption\">{{caption}}</h3>\n<ul id=\"{{id}}\">\n    <li ng-repeat=\"line in data\">{{line}}</li>\n</ul>"
		});

})(angular);