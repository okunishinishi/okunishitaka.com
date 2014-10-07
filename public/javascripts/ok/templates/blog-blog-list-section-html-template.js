/**
 * Template for blogBlogListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section.html",
		    "content": "<section id=\"blog-list-section\" ng:controller=\"BlogListCtrl\">\n    <dl id=\"blog-list\">\n        <dt ng:repeat-start=\"b in blogs\">\n            <a class=\"blog-dt-anchor\"\n               name=\"blog-{{b._id}}\">\n                {{b.title}}\n            </a>\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</section>"
		});

})(angular);