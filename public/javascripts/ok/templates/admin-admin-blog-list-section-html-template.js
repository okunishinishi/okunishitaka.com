/**
 * Template for adminAdminBlogListSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminBlogListSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-blog-list-section.html",
		    "content": "<section id=\"admin-blog-list-section\" ng:controller=\"AdminBlogListCtrl\">\n    <ul id=\"admin-blog-list\">\n        <li ng:repeat=\"b in datasources.listing.data\" class=\"admin-blog-list-item\">\n\n            <span class=\"admin-blog-list-action-area\">\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"edit(b)\"><i class=\"fa fa-pencil\"></i>{{l.buttons.EDIT}}</a>\n                <a href=\"javascript:void(0)\" class=\"link-button\" ng:click=\"destroy(b)\"><i class=\"fa fa-trash-o\"></i>{{l.buttons.DELETE}}</a>\n            </span>\n\n            <div class=\"admin-blog-list-item-inner\">\n\n\n                <h3 class=\"admin-blog-list-title\">\n                    <a class=\"blog-dt-anchor\"\n                       name=\"blog-{{b._id}}\">{{b.title}}</a>\n                </h3>\n\n            <span class=\"admin-blog-list-content\">\n            {{b.content | textEllipsisFilter:contentEllipsisLength}}\n            </span>\n\n            </div>\n        </li>\n    </ul>\n    <a id=\"admin-blog-more-button\"\n       class=\"list-more-button\"\n       ok:button\n       ng:show=\"datasources.listing.hasMore\"\n       ng:click=\"datasources.listing.loadMore()\"\n            >{{l.buttons.MORE}}</a>\n</section>"
		});

})(angular);