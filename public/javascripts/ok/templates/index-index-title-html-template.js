/**
 * Template for indexIndexTitleHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexTitleHtmlTemplate', {
		    "name": "/html/partials/index/index-title.html",
		    "content": "<h1 class=\"content-section-title\">{{title}}</h1>\n<p>{{description}}</p>"
		});

})(angular);