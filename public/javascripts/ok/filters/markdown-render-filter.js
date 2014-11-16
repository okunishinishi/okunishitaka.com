/**
 * @ngdoc filter
 * @filter markdownRenderFilter
 * @description Markdown render filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('markdownRenderFilter', function defineMarkdownRenderFilter(markdownRenderService) {
            return function markdownRenderFilter(text) {
                return markdownRenderService.render(text);
            };
        });
})(angular, apeman);