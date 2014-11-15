/**
 * Template for faviconHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('faviconHtmlTemplate', {
		    "name": "/html/partials/favicon.html",
		    "content": "<link rel=\"icon\" href=\"/favicon.png?v=0.0.0\">"
		});

})(angular);