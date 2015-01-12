/**
 * @ngdoc object
 * @name adminAdminBlogListSectionHtmlTemplate
 * @description Template for adminAdminBlogListSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-blog-list-section.html",
		    "content": "<section id=\"admin-blog-list-section\" ng:controller=\"AdminBlogListCtrl\">\n    <dl id=\"admin-blog-list\" class=\"cover-container\">\n        <div ok:cover ok:cover-visible=\"loading\"></div>\n        <dt ng:repeat-start=\"b in blogs\">\n            <span class=\"blog-list-action-area\">\n                <a ok:button ok:button-type=\"'link'\" ng:click=\"edit(b)\"><i\n                        class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a ok:button ok:button-type=\"'link'\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DESTROY}}</a>\n            </span>\n            <span name=\"blog-{{b._id}}\">\n                {{b.blog_title}}\n            </span>\n            <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n            <span class=\"display-block\">\n                <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tag_texts) track by $index\"></span>\n            </span>\n        </dt>\n        <dd ng:repeat-end=\"\"\n            ng:bind-html=\"b.blog_content | markdownRenderFilter | htmlTextFilter | textEllipsisFilter:CONTENT_MAX_LENGTH\"></dd>\n    </dl>\n    <a id=\"admin-blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"hasMore && !loading\"\n       ng:click=\"loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

})(angular);