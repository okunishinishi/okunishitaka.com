/**
 * constant for meta.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('metaConstant', {
		    "supportedLangs": [
		        "ja",
		        "en"
		    ],
		    "name": "okunishitaka.com",
		    "version": "0.0.0",
		    "author": "Taka Okunishi",
		    "license": "GNU",
		    "homepage": "https://github.com/okunishinishi/okunishitaka.com"
		});

})(angular);

