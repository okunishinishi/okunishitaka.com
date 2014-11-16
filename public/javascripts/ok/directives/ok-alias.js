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
                    var values = {};
                    Object.keys(alias).forEach(function (key) {
                        var expression = alias[key];
                        scope.$watch(expression, function (value) {
                            values[key] = value;
                        }, true);
                        Object.defineProperty(scope, key, {
                            get: function () {
                                return values[key];
                            },
                            set: function (value) {
                                var msg = [
                                    'You can not set value with key "' + key + '"',
                                    'because it is defined as alias key by okAlias directive.'
                                ].join(',');
                                throw new Error(msg);
                            }
                        });
                    });
                }
            }
        });

})(angular, apeman);