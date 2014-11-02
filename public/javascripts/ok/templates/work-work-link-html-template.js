/**
 * Template for workWorkLinkHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('workWorkLinkHtmlTemplate', {
		    "name": "/html/partials/work/work-link.html",
		    "content": "<a ng:href=\"{{links[href]}}\"\n   ng:if=\"!!links[href]\"\n   class=\"work-link work-white-back\">{{title}}<span\n        class=\"work-link-icon fa fa-angle-right\"></span></a>"
		});

})(angular);