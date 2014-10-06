/**
 * Template for blogBlogListSectionContentHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionContentHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section-content.html",
		    "content": "<div>\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in blogs\" id=\"blog-dt-{{b._id}}\">\n            {{b.title}}\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</div>"
		});

})(angular);