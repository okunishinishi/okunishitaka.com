/**
 * constant for partialUrl.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html"
		});

})(angular);

