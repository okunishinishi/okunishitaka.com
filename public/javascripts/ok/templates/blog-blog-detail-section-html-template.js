/**
 * Template for blogBlogDetailSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogDetailSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-detail-section.html",
		    "content": "<section id=\"blog-detail-section\"\n         ng:if=\"!!viewing.data._id\"\n         ng:controller=\"BlogDetailCtrl\">\n    <div id=\"blog-detail-section-inner\" class=\"container\"\n         ok:alias=\"{'b':'viewing.data'}\">\n        <div id=\"blog-detail-section-back\">\n\n            <a class=\"blog-title\">{{b.title}}</a>\n            <span class=\"blog-date-label\">{{b._at | dateFormatFilter}}</span>\n            <span class=\"display-block\">\n                <span ok:tag ok:title=\"t\" ng:repeat=\"t in (b.tagText | textSplitFilter:',')\"></span>\n            </span>\n\n            <div class=\"blog-content-container\"\n                 ng:bind-html=\"b.content | markdownRenderFilter\"></div>\n        </div>\n    </div>\n</section>"
		});

})(angular);