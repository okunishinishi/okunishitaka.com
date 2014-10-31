/**
 * Template for indexIndexSeeMoreButtonHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('indexIndexSeeMoreButtonHtmlTemplate', {
		    "name": "/html/partials/index/index-see-more-button.html",
		    "content": "<a class=\"see-more-button\" href=\"{{href}}\">\n    <span class=\"see-more-button-label\">\n        <span class=\"see-more-button-label-inner fa fa-angle-right\"></span>\n    </span>\n</a>"
		});

})(angular);