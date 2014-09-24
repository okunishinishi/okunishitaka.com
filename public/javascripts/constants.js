/**
 * Services.
 * @requires angular
 */

(function (ng) {
    "use strict";

    ng
        .module('okConstants', [

        ]);
})(angular);

/**
 * Message resources.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('okConstants')
        .constant('locales', {
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
		            "more": "See more"
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
		            "more": "See more"
		        }
		    }
		});
})(angular);


