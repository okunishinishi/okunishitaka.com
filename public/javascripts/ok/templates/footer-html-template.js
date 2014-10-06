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