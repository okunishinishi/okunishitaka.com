/**
 * Constant for apiUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('apiUrlConstant', {
		    "ADMIN_API_BLOG_DELETE_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_GET": "/admin/api/blog",
		    "ADMIN_API_BLOG_GET_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_POST": "/admin/api/blog",
		    "ADMIN_API_BLOG_PUT_WITH_ID": "/admin/api/blog/:_id",
		    "ADMIN_API_BLOG_TAG_DELETE_WITH_ID": "/admin/api/blog-tag/:_id",
		    "ADMIN_API_BLOG_TAG_GET": "/admin/api/blog-tag",
		    "ADMIN_API_BLOG_TAG_POST": "/admin/api/blog-tag",
		    "API_BLOG_GET": "/api/blog",
		    "API_BLOG_GET_WITH_ID": "/api/blog/:_id",
		    "API_BLOG_TAG_GET": "/api/blog-tag",
		    "API_PROFILE_GET": "/api/profile",
		    "API_WORK_GET": "/api/work"
		});

})(angular);

