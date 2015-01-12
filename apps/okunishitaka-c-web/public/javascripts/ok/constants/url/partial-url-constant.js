/**
 * Constant for partialUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "COVER": "/html/partials/cover.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "META": "/html/partials/meta.html",
		    "TITLE": "/html/partials/title.html",
		    "TOAST": "/html/partials/toast.html"
		});

})(angular);

