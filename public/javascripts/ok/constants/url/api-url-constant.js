/**
 * Constant for apiUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('apiUrlConstant', {
		    "API_BLOGS_GET": "/api/blogs",
		    "API_BLOGS_POST": "/api/blogs",
		    "API_BLOGS_GET_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_PUT_WITH_ID": "/api/blogs/:_id",
		    "API_BLOGS_DELETE_WITH_ID": "/api/blogs/:_id",
		    "API_SETTINGS_GET": "/api/settings",
		    "API_SETTINGS_PUT": "/api/settings",
		    "API_PROFILES_GET": "/api/profiles",
		    "API_PROFILES_PUT": "/api/profiles",
		    "API_WORKS_GET": "/api/works"
		});

})(angular);

