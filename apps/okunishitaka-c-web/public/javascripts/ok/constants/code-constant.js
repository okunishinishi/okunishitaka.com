/**
 * Constant for code.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('codeConstant', {
		    "appErrorCodes": {
		        "CONFLICT_ERROR": 0,
		        "CONNECTION_ERROR": 1,
		        "NOT_FOUND_ERROR": 2,
		        "SERVER_ERROR": 3,
		        "UNEXPECTED_ERROR": 4,
		        "VALIDATION_ERROR": 5
		    },
		    "httpStatusCodes": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "NOT_AUTHORIZED_ERROR": 401,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
		});

})(angular);

