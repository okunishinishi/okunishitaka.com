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
		    "content": "<section id=\"admin-blog-list-section\" ng:controller=\"BlogEditListCtrl\">\n    <ul id=\"admin-blog-list\">\n        <li ng:repeat=\"b in blogs\" class=\"admin-blog-list-item\">\n\n            <span class=\"admin-blog-list-action-area\">\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"edit(b)\"><i class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DELETE}}</a>\n            </span>\n\n            <div class=\"admin-blog-list-item-inner\">\n\n\n                <h3 class=\"admin-blog-list-title\">\n                    <a class=\"blog-dt-anchor\"\n                       name=\"blog-{{b._id}}\">{{b.title}}</a>\n                </h3>\n\n            <span class=\"admin-blog-list-content\">\n            {{summarize(b.content)}}\n            </span>\n\n            </div>\n        </li>\n    </ul>\n</section>"
		});

})(angular);