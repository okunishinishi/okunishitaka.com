/**
 * Template for headerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('headerHtmlTemplate', {
		    "name": "/html/partials/header.html",
		    "content": "<!-- Header HTML -->\n<div class=\"container\">\n    <h1 class=\"header-logo\" ng-click=\"goTopPage()\">{{l.meta.NAME}}</h1>\n    <nav class=\"header-nav\">\n        <a class=\"nav-item\" href=\"{{pages.INDEX}}\">{{l.pageNames.INDEX}}</a>\n        <a class=\"nav-item\" href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n        <a class=\"nav-item\" href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n    </nav>\n</div>"
		});

})(angular);