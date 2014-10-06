/**
 * ok templates module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.templates', [
            
        ]);
})(angular);

/**
 * Template for footerHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('footerHtmlTemplate', {
		    "name": "/html/partials/footer.html",
		    "content": "<div class=\"container\" id=\"footer-content\">\n    <small id=\"small-copyright\">Copyright © 2014 Taka Okunishi All Rights Reserved</small>\n</div>\n"
		});

})(angular);
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
/**
 * Template for metaHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('metaHtmlTemplate', {
		    "name": "/html/partials/meta.html",
		    "content": "<!-- Meta HTML -->\n<meta ng:attr-charset=\"UTF-8\">\n<meta name=\"application-name\" content=\"{{l.meta.NAME}}\"/>\n<meta name=\"description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"generator\" content=\"apeman\"/>\n<meta name=\"author\" content=\"{{l.meta.AUTHOR}}\"/>\n<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"/>\n\n<!-- Open graph tags -->\n<meta property=\"og:title\" content=\"{{title(page)}}\"/>\n<meta property=\"og:type\" content=\"website\"/>\n<meta property=\"og:image\" content=\"\"/> <!-- FIXME -->\n<meta property=\"og:url\" content=\"{{app.HOMEPAGE}}\"/>\n<meta property=\"og:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n\n\n<!-- Twitter tags -->\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:title\" content=\"{{title(page)}}\">\n<meta name=\"twitter:description\" content=\"{{l.meta.DESCRIPTION}}\"/>\n<meta name=\"twitter:image\" content=\"\"/> <!-- FIXME -->\n\n"
		});

})(angular);
