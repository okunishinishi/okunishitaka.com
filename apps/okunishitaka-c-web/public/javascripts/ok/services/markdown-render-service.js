/**
 * @ngdoc object
 * @name markdownRenderService
 * @description Markdown render service.
 */
(function (ng, marked) {
    "use strict";

    ng
        .module('ok.services')
        .service('markdownRenderService', function MarkdownRenderService() {
            var s = this;

            /**
             * Render a markdown text.
             * @param {string} text - Text to render.
             * @returns {string} - Rendered text.
             */
            s.render = function (text) {
                return marked(text || '');
            };

        });

})(angular, marked);