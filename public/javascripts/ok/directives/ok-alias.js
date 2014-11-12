/**
 * @ngdoc directive
 * @name okAlias
 * @description Ok alias.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okAlias', function defineOkAlias($parse) {
            return {
                link: function (scope, elm, attr) {
                    var alias = $parse(attr.okAlias)(scope);
                    if (!alias) {
                        return;
                    }
                    Object.keys(alias).forEach(function (key) {
                        var expression = alias[key];
                        scope.$watch(expression, function (value) {
                            scope[key] = value;
                        }, true);
                    });
                }
            }
        });

})(angular, apeman);