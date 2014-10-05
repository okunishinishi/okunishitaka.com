/**
 * constant for pageUrl.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('pageUrlConstant', {
		    "blog": "/blog.html",
		    "index": "/index.html",
		    "work": "/work.html"
		});

})(angular);

