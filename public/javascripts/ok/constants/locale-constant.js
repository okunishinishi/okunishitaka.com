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
		            "cancel": "Cancel",
		            "save": "Save"
		        },
		        "errors": {
		            "ConflictError": "Conflict occured.",
		            "ConnectionError": "Connection error occured.",
		            "NotfoundError": "Resource not found.",
		            "ServerError": "Server error occured.",
		            "UnexpectedError": "Unexpected error occured.",
		            "ValidationError": "Invalid input."
		        },
		        "errorDescription": {
		            "ConflictError": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "ConnectionError": "Ensure you are connected to the Internet and please try again.",
		            "NotfoundError": "Sorry! The requested resource is not availabe anymore.",
		            "ServiceError": "Something wrong within our server. Plase try again later.",
		            "UnexpectedError": "Something seems to be wrong.",
		            "ValidationError": ""
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
		            "cancel": "Cancel",
		            "save": "Save"
		        },
		        "errors": {
		            "ConflictError": "Conflict occured.",
		            "ConnectionError": "Connection error occured.",
		            "NotfoundError": "Resource not found.",
		            "ServerError": "Server error occured.",
		            "UnexpectedError": "Unexpected error occured.",
		            "ValidationError": "Invalid input."
		        },
		        "errorDescription": {
		            "ConflictError": "It seems that someone else update the resource first. \nPlease reload the page and try again.",
		            "ConnectionError": "Ensure you are connected to the Internet and please try again.",
		            "NotfoundError": "Sorry! The requested resource is not availabe anymore.",
		            "ServiceError": "Something wrong within our server. Plase try again later.",
		            "UnexpectedError": "Something seems to be wrong.",
		            "ValidationError": ""
		        }
		    }
		});
})(angular);

