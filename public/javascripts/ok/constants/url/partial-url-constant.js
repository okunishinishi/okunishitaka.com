/**
 * Constant for partialUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "BLOG_ASIDE_CONTENT": "/html/partials/blog/blog-aside-content.html",
		    "BLOG_EDIT_SECTION": "/html/partials/blog/blog-edit-section.html",
		    "BLOG_LIST_SECTION": "/html/partials/blog/blog-list-section.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "INDEX_CONTENT_TITLE": "/html/partials/index/index-content-title.html",
		    "INDEX_SEE_MORE_BUTTON": "/html/partials/index/index-see-more-button.html",
		    "META": "/html/partials/meta.html",
		    "PROFILE_LIST": "/html/partials/profile/profile-list.html",
		    "PROFILE_TABLE": "/html/partials/profile/profile-table.html",
		    "WORK_LIST": "/html/partials/work/work-list.html"
		});

})(angular);

