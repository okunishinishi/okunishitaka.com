/**
 * @ngdoc directive
 * @name okReplace
 * @description Ok replace.
 */
(function (ng) {
    "use strict";
    var name = 'okReplace';
    ng
        .module('ok.directives')
        .directive(name, function defineKgReplace($http, $templateCache, $compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var urlExpression = attr[name],
                        url = scope.$eval(urlExpression);
                    if (!url) {
                        return;
                    }
                    $http.get(url, {
                        cache: $templateCache
                    })
                        .success(function (content) {
                            element.replaceWith($compile(content)(scope));
                        })
                        .error(function () {
                            console.error('[' + name + '] Failed to load template:', urlExpression);
                        })
                    ;
                }
            }
        });

})(angular);