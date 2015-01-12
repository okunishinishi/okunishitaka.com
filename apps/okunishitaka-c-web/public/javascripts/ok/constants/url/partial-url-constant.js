/**
 * Constant for partialUrl.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('partialUrlConstant', {
		    "COVER": "/html/partials/cover.html",
		    "FAVICON": "/html/partials/favicon.html",
		    "FOOTER": "/html/partials/footer.html",
		    "HEADER": "/html/partials/header.html",
		    "INDEX_CAPTION_SECTION": "/html/partials/index/index-caption-section.html",
		    "INDEX_CONTENT_TITLE": "/html/partials/index/index-content-title.html",
		    "INDEX_SEE_MORE_BUTTON": "/html/partials/index/index-see-more-button.html",
		    "INDEX_TITLE_SECTION": "/html/partials/index/index-title-section.html",
		    "META": "/html/partials/meta.html",
		    "PROFILE_LIST": "/html/partials/profile/profile-list.html",
		    "PROFILE_TABLE": "/html/partials/profile/profile-table.html",
		    "SOCIAL": "/html/partials/social.html",
		    "TITLE": "/html/partials/title.html",
		    "TOAST": "/html/partials/toast.html",
		    "TRACK": "/html/partials/track.html"
		});

})(angular);

