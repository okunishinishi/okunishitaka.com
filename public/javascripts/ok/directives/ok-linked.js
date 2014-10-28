/**
 * @ngdoc directive
 * @name okLinked
 * @description Ok linked.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okLinked', function defineOkLinked(textLinkLogic) {
            return {
                link: function (scope, elm, attr) {
                    scope.$watch(function (scope) {
                        var text = $(elm).text(),
                            html = textLinkLogic.toLinkedHtml(text, scope.links || {});
                        $(elm).html(html).find('a').attr({target: '_blank'});
                    });
                },
                scope: {
                    links: "=okLinked"
                }
            }
        });

})(angular, apeman, jQuery);