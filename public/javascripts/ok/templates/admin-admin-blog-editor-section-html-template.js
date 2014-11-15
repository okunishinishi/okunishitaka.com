/**
 * Template for adminAdminBlogEditorSectionHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('adminAdminBlogEditorSectionHtmlTemplate', {
		    "name": "/html/partials/admin/admin-blog-editor-section.html",
		    "content": "<section id=\"admin-blog-editor-section\"\n         ng:class=\"{'blog-editor-visible':!!editing.data}\"\n         ng:controller=\"AdminBlogEditCtrl\" class=\"cover\">\n    <div id=\"admin-blog-editor-section-content\"\n         ok:alias=\"{blog:'editing.data'}\"\n         class=\"container position-relative\">\n\n        <a ng:click=\"close()\" id=\"admin-blog-close-button\" class=\"close-button\">{{l.buttons.CLOSE}}</a>\n\n        <div class=\"grid-row\">\n            <div class=\"grid-col\">\n                <fieldset class=\"no-style-fieldset\">\n                    <div class=\"field\">\n                        <input type=\"text\" id=\"blog-title-input\"\n                               placeholder=\"{{l.placeholders.blog.TITLE}}\"\n                               ng:model=\"blog.title\"\n                               class=\"wide-input\">\n                    </div>\n                    <div class=\"field\">\n                        <textarea name=\"blog-text\" id=\"blog-text-textarea\"\n                                  placeholder=\"{{l.placeholders.blog.CONTENT}}\"\n                                  class=\"wide-textarea\" cols=\"20\" rows=\"10\"\n                                  ng:model=\"blog.content\"\n                                ></textarea>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"text-align-center\">\n                            <a id=\"blog-cancel-button\"\n                               ok:button\n                               ng:click=\"cancel()\">{{l.buttons.CANCEL}}</a>\n                            <a id=\"blog-save-button\"\n                               ok:button\n                               ok:button-type=\"'primary'\"\n                               ng:click=\"save(blog)\">{{l.buttons.SAVE}}</a>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"grid-col\">\n                <fieldset>\n                    <legend>{{l.pages.blog.PREVIEW_LEGEND}}</legend>\n                    <div id=\"admin-blog-preview-div\">\n                        <h2>{{blog.title}}</h2>\n\n                        <div ng:bind-html=\"preview(blog).html\"></div>\n                    </div>\n                </fieldset>\n                <div class=\"grid-col\">\n                    <br class=\"clear\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"
		});

})(angular);