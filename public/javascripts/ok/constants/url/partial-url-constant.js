/**
 * constant for partialUrl.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "footer": "/html/partials/footer.html",
		    "header": "/html/partials/header.html"
		});

})(angular);

