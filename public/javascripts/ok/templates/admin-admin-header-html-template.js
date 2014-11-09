/**
 * Template for adminAdminHeaderHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminHeaderHtmlTemplate', {
		    "name": "/html/partials/admin/admin-header.html",
		    "content": "<!-- Header HTML -->\n<div class=\"container\">\n    <nav class=\"header-nav\">\n    </nav>\n    <h1 class=\"header-logo\" ng:click=\"goTopPage();\">{{l.pages.admin.LOGO}}</h1>\n</div>"
		});

})(angular);