/**
 * constant for pageUrl.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('pageUrlConstant', {
		    "BLOG": "/blog.html",
		    "INDEX": "/index.html",
		    "WORK": "/work.html"
		});

})(angular);

