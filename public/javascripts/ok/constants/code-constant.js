/**
 * constant for code.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('codeConstant', {
		    "appErrorCodes": {
		        "CONFLICT_ERROR": 1,
		        "CONNECTION_ERROR": 2,
		        "NOT_FOUND_ERROR": 3,
		        "SERVER_ERROR": 4,
		        "UNEXPECTED_ERROR": 5,
		        "VALIDATION_ERROR": 6
		    },
		    "httpStatusCodes": {
		        "SUCCESS": 200,
		        "NOT_FOUND_ERROR": 404,
		        "CONFLICT_ERROR": 409,
		        "VALIDATION_ERROR": 422,
		        "SERVER_ERROR": 503
		    }
		});

})(angular);

