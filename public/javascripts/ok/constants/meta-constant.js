/**
 * constant for meta.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('metaConstant', {
		    "SUPPORTED_LANGS": [
		        "ja",
		        "en"
		    ],
		    "NAME": "okunishitaka.com",
		    "VERSION": "0.0.0",
		    "DESCRIPTION": "Homepage for Taka Okunishi",
		    "AUTHOR": "Taka Okunishi",
		    "LICENSE": "GNU",
		    "HOMEPAGE": "https://github.com/okunishinishi/okunishitaka.com"
		});

})(angular);

