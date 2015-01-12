/**
 * Constant for pageUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('pageUrlConstant', {
		    "INDEX": "/index.html",
		    "PROFILE": "/profile.html"
		});

})(angular);

