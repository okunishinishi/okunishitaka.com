/**
 * Constant for locale.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('localeConstant', {
		    "en": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content "
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            }
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
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi"
		        },
		        "placeholders": {
		            "blog": {
		                "TITLE": "Title",
		                "CONTENT": "Content "
		            }
		        },
		        "labels": {
		            "blogstatus": {
		                "PUBLIC": "public",
		                "PRIVATE": "private"
		            }
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

