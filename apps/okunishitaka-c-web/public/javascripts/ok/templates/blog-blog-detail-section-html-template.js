/**
 * @ngdoc object
 * @name blogBlogDetailSectionHtmlTemplate
 * @description Template for blogBlogDetailSectionHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogDetailSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-detail-section.html",
		    "content": "<section id=\"blog-detail-section\" ng:controller=\"BlogDetailCtrl\" ng:show=\"!!blogId\">\n    <div ok:cover ok:cover-visible=\"loading\"></div>\n    <div ng:if=\"!!blog\" id=\"blog-detail-section-inner\">\n\n        <h1>{{blog.blog_title}}</h1>\n\n        <div class=\"section-content\">\n            <div ng:bind-html=\"blog.blog_content | markdownRenderFilter\"></div>\n        </div>\n    </div>\n</section>"
		});

})(angular);