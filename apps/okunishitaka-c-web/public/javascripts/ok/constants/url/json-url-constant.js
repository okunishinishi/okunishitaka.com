/**
 * Constant for jsonUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('jsonUrlConstant', {
		    "PROFILE": "/json/profile.json",
		    "WORKS": "/json/works.json"
		});

})(angular);

