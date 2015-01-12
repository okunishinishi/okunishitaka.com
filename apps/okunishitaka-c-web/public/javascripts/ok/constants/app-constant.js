/**
 * Constant for app.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('appConstant', {
		    "VERSION": "0.0.0",
		    "SUPPORTED_LANGS": [
		        "ja"
		    ]
		});

})(angular);

