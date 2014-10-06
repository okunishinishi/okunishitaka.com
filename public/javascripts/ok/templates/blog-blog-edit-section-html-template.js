/**
 * Template for blogBlogEditSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('blogBlogEditSectionHtmlTemplate', {
		    "name": "/html/partials/blog/blog-edit-section.html",
		    "content": "<section id=\"blog-edit-setion\" ng:controller=\"BlogEditCtrl\">\n    <div>\n        <input type=\"text\" id=\"blog-title-input\"\n               placeholder=\"{{l.placeholders.blog.TITLE}}\"\n               class=\"wide-input\">\n    </div>\n    <div>\n        <label for=\"blog-status-radio-true\">\n            <input id=\"blog-status-radio-true\" type=\"radio\" name=\"blog-status-radio\" value=\"1\"/>\n            {{l.labels.blogstatus.PUBLIC}}\n        </label>\n        <label for=\"blog-status-radio-false\">\n            <input id=\"blog-status-radio-false\" type=\"radio\" name=\"blog-status-radio\" value=\"0\"/>\n            {{l.labels.blogstatus.PRIVATE}}\n        </label>\n    </div>\n    <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n              placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n              class=\"wide-textarea\" cols=\"30\" rows=\"20\"\n            ></textarea>\n\n    <div id=\"blog-edti-preview\"></div>\n    <div class=\"text-center\">\n        <a id=\"blog-cancel-button\" class=\"button\" href=\"\">{{l.buttons.CANCEL}}</a>\n        <a id=\"blog-save-button\" class=\"button\" href=\"\">{{l.buttons.SAVE}}</a>\n    </div>\n</section>"
		});

})(angular);