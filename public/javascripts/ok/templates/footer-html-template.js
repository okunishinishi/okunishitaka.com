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
		    "content": "<div class=\"container\" id=\"footer-content\">\n    <small id=\"small-copyright\">{{l.meta.COPY_RIGHT}}</small>\n\n    <div class=\"float-right\">\n        <a ng-href=\"{{links.MY_GITHUB}}\">Repo</a>\n    </div>\n</div>\n"
		});

})(angular);