/**
 * Message resources.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('localeConstant', {
		    "en": {
		        "meta": {
		            "name": "okunishitaka.com",
		            "version": "0.0.0",
		            "author": "Taka Okunishi",
		            "license": "GNU",
		            "homepage": "https://github.com/okunishinishi/okunishitaka.com"
		        },
		        "pageNames": {
		            "index": "Top",
		            "blog": "Blog",
		            "work": "Works"
		        },
		        "buttons": {
		            "more": "See more",
		            "cancel": "cancel",
		            "save": "save"
		        }
		    },
		    "ja": {
		        "meta": {
		            "name": "okunishitaka.com",
		            "version": "0.0.0",
		            "author": "Taka Okunishi",
		            "license": "GNU",
		            "homepage": "https://github.com/okunishinishi/okunishitaka.com"
		        },
		        "pageNames": {
		            "index": "Top",
		            "blog": "Blog",
		            "work": "Works"
		        },
		        "buttons": {
		            "more": "See more",
		            "cancel": "cancel",
		            "save": "save"
		        }
		    }
		});
})(angular);

