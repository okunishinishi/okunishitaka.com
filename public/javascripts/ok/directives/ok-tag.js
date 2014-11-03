/**
 * @ngdoc directive
 * @name okTag
 * @description Ok tag.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTag', function defineOkTag(tagColorLogic) {
            return {
                scope: {
                    title: '=okTitle'
                },
                link: function (scope, elm) {
                    scope.color = tagColorLogic.tagColor(scope.title);
                },
                template: [
                    '<span class="ok-tag" style="border-color: {{color}};color:{{color}};">',
                    '<span class="ok-tag-icon" style="background-color: {{color}};"></span>',
                    '{{title}}',
                    '</span>'
                ].join('')
            }
        });

})(angular, apeman);