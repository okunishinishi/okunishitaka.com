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

