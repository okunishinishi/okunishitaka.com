/**
 * Template for blogBlogEditListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-list-section.html",
		    "content": "<section id=\"blog-edit-list-section\" ng:controller=\"BlogEditListCtrl\">\n    <dl id=\"blog-edit-list\">\n        <dt ng:repeat-start=\"b in blogs\">\n            <a class=\"blog-dt-anchor\"\n               name=\"blog-{{b._id}}\">\n                {{b.title}}\n            </a>\n        </dt>\n        <dd ng:repeat-end=\"\">{{b.content}}</dd>\n    </dl>\n</section>"
		});

})(angular);