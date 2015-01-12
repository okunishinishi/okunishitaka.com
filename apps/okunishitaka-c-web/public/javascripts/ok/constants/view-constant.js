/**
 * Constant for view.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('viewConstant', {
		    "profile.LIST": "partialUrlConstant.PROFILE_PROFILE_LIST_VIEW",
		    "blog.LIST": "partialUrlConstant.BLOG_BLOG_LIST_VIEW",
		    "work.LIST": "partialUrlConstant.WORK_WORK_LIST_VIEW",
		    "admin.BLOG": "partialUrlConstant.ADMIN_ADMIN_BLOG_VIEW"
		});

})(angular);

