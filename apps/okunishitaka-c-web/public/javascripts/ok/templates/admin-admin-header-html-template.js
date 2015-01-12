/**
 * @ngdoc object
 * @name adminAdminHeaderHtmlTemplate
 * @description Template for adminAdminHeaderHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminHeaderHtmlTemplate', {
		    "name": "/html/partials/admin/admin-header.html",
		    "content": "<!-- Header HTML -->\n<header>\n\n    <div class=\"container\">\n        <nav class=\"header-nav\">\n        </nav>\n        <h1 class=\"header-logo\" ng:click=\"changeToTopPage();\">{{l.pages.admin.TITLE}}</h1>\n    </div>\n</header>\n"
		});

})(angular);