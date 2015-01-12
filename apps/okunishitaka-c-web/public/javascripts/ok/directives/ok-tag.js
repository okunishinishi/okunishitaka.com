/**
 * @ngdoc directive
 * @name okTag
 * @description Ok tag.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTag', function defineOkTag() {
            return {
                scope: {
                    title: '=okTitle'
                },
                link: function (scope, elm) {
                },
                template: [
                    '<span class="ok-tag" style="border-color: {{title | tagColorFilter}};color:{{title | tagColorFilter}};">',
                    '<span class="ok-tag-icon" style="background-color: {{title | tagColorFilter}};"></span>',
                    '{{title}}',
                    '</span>'
                ].join('')
            }
        });

})(angular);