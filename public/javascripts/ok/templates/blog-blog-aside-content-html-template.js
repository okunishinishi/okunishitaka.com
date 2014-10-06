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
		    "content": "<div ng:controller=\"BlogAsideCtrl\" >\n    <ul>\n        <li ng:repeat=\"b in blogs\">\n            <a href=\"javascript:void(0)\" ng:click=\"scrollTo('blog-dt-' + b._id)\">{{b.title}}</a>\n        </li>\n    </ul>\n    <a id=\"aside-blog-more-button\" href=\"javascript:void(0)\" ng:click=\"more()\">{{l.buttons.MORE}}</a>\n</div>"
		});

})(angular);