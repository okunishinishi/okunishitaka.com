/**
 * @ngdoc object
 * @name blogBlogListSectionHtmlTemplate
 * @description Template for blogBlogListSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-list-section.html",
		    "content": "<section id=\"blog-list-section\" ng:controller=\"BlogListCtrl\">\n    <dl id=\"blog-list\" class=\"cover-container\">\n        <div ok:cover ok:cover-visible=\"loading\"></div>\n        <dt ng:repeat-start=\"b in blogs\">\n            <a class=\"blog-dt-anchor blog-title\"\n               name=\"blog-{{b._id}}\">\n                {{b.blog_title}}\n            </a>\n            <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n            <span class=\"display-block\">\n                <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tag_texts) track by $index\"></span>\n            </span>\n        </dt>\n        <dd ng:repeat-end=\"\" ng:bind-html=\"b.blog_content | markdownRenderFilter\"></dd>\n    </dl>\n    <a id=\"blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"hasMore\"\n       ng:click=\"loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

})(angular);