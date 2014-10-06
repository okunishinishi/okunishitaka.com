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
		    "content": "<section id=\"blog-edit-setion\" ng:controller=\"BlogEditCtrl\">\n    <div>\n        <input type=\"text\" id=\"blog-title-input\" class=\"wide-input\">\n    </div>\n    <textarea name=\"blog-text\" id=\"blog-text-textarea\" class=\"wide-textarea\" cols=\"30\" rows=\"20\"></textarea>\n\n    <div id=\"blog-edti-preview\"></div>\n    <div class=\"text-center\">\n        <a id=\"blog-cancel-button\" class=\"button\" href=\"\">{{l.buttons.CANCEL}}</a>\n        <a id=\"blog-save-button\" class=\"button\" href=\"\">{{l.buttons.SAVE}}</a>\n    </div>\n</section>"
		});

})(angular);