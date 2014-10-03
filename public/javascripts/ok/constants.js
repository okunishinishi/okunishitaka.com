/**
 * ok constants module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.constants', [
            
        ]);
})(angular);

/**
 * constant for code.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('codeConstant', {
		    "httpStatus": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
		});

})(angular);


/**
 * constant for locale.
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
		            "INDEX": "Top",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "buttons": {
		            "MORE": "See more",
		            "CANCEL": "Cancel",
		            "SAVE": "Save"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
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
		            "INDEX": "Top",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "buttons": {
		            "MORE": "See more",
		            "CANCEL": "Cancel",
		            "SAVE": "Save"
		        },
		        "errors": {
		            "CONFLICT_ERROR": "Conflict occured.",
		            "CONNECTION_ERROR": "Connection error occured.",
		            "NOT_FOUND_ERROR": "Resource not found.",
		            "SERVER_ERROR": "Server error occured.",
		            "UNEXPECTED_ERROR": "Unexpected error occured.",
		            "VALIDATION_ERROR": "Invalid input."
		        },
		        "errorDescriptions": {
		            "CONFLICT_ERROR": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "CONNECTION_ERROR": "Ensure you are connected to the Internet and please try again.",
		            "NOT_FOUND_ERROR": "Sorry! The requested resource is not availabe anymore.",
		            "SERVER_ERROR": "Something wrong within our server. Plase try again later.",
		            "UNEXPECTED_ERROR": "Something seems to be wrong.",
		            "VALIDATION_ERROR": ""
		        }
		    }
		});

})(angular);


/**
 * constant for partial.
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


