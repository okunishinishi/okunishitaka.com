/**
* Partial filenames.
* @requires angular
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialConstant', {
		    "footer": "/html/partials/footer.html",
		    "header": "/html/partials/header.html"
		});
})(angular);

