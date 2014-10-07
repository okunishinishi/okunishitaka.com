/**
 * Constant for apiUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('apiUrlConstant', {
		    "BLOGS_GET": "/blogs",
		    "BLOGS_POST": "/blogs",
		    "BLOGS_GET_WITH_ID": "/blogs/:_id",
		    "BLOGS_PUT_WITH_ID": "/blogs/:_id",
		    "BLOGS_DELETE_WITH_ID": "/blogs/:_id",
		    "SETTINGS_GET": "/settings",
		    "SETTINGS_PUT": "/settings"
		});

})(angular);

