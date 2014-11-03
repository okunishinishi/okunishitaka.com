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
		    "content": "<section id=\"blog-edit-list-section\" ng:controller=\"BlogEditListCtrl\">\n    <ul id=\"blog-edit-list\">\n        <li ng:repeat=\"b in blogs\" class=\"blog-edit-list-item\">\n\n            <span class=\"blog-edit-list-action-area\">\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"edit(b)\"><i class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DELETE}}</a>\n            </span>\n\n            <div class=\"blog-edit-list-item-inner\">\n\n\n                <h3 class=\"blog-edit-list-title\">\n                    <a class=\"blog-dt-anchor\"\n                       name=\"blog-{{b._id}}\">{{b.title}}</a>\n                </h3>\n\n            <span class=\"blog-edit-list-content\">\n            {{summarize(b.content)}}\n            </span>\n\n            </div>\n        </li>\n    </ul>\n</section>"
		});

})(angular);