/**
 * Template for blogBlogAsideContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogAsideContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-aside-content.html",
		    "content": "<div ng:controller=\"BlogAsideCtrl\">\n    <ul>\n        <li ng:repeat=\"b in listing.data\">\n            <a href=\"javascript:void(0)\" ng:click=\"scrollTo('blog-' + b._id)\">{{b.title}}</a>\n        </li>\n    </ul>\n    <a id=\"aside-blog-more-button\"\n       href=\"javascript:void(0)\"\n       ng:show=\"list.hasMore\"\n       ng:click=\"list.loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</div>"
		});

})(angular);