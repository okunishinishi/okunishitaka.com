/**
 * @ngdoc object
 * @name headerHtmlTemplate
 * @description Template for headerHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('headerHtmlTemplate', {
		    "name": "/html/partials/header.html",
		    "content": "<!-- Header HTML -->\n<header>\n\n    <div class=\"container\">\n        <nav class=\"header-nav\">\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='profile'}\"\n               ng:href=\"{{pages.PROFILE}}\">{{l.pageNames.PROFILE}}</a>\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='blog'}\"\n               ng:href=\"{{pages.BLOG}}\">{{l.pageNames.BLOG}}</a>\n            <a class=\"header-nav-item nav-item theme-font\" ng:class=\"{'nav-item-selected':page=='work'}\"\n               ng:href=\"{{pages.WORK}}\">{{l.pageNames.WORK}}</a>\n        </nav>\n        <h1 class=\"header-logo\" ng:click=\"changeToTopPage();\">{{l.meta.NAME}}</h1>\n    </div>\n</header>\n"
		});

})(angular);