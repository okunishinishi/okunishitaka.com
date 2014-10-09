/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okReplace
 * @param {string} ngReplace - angular expression evaluating to external HTML URL.
 * @description Replace tag with an external HTML fragment.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okReplace', function defineOkReplace($http, $templateCache, $compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var templateUrlExpression = attr.okReplace,
                        templateUrl = scope.$eval(templateUrlExpression);
                    $http.get(templateUrl, {
                        cache: $templateCache
                    })
                        .success(function (content) {
                            element.replaceWith($compile(content)(scope));
                        })
                        .error(function () {
                            console.error('[okReplace] Failed to load template:', templateUrlExpression);
                        })
                    ;
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okScrollToFixed
 * @description Ok scroll to fixed.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okScrollToFixed', function defineOkScrollToFixed($window, positionUtil) {
            return {
                link: function (scope, elm, attr) {
                    elm = $(elm);

                    var top, bottom, winHeight, fixed = false;
                    var window = $($window);

                    window.scroll(function () {
                        if (!top) {
                            top = positionUtil.offsetSum(elm).top;

                        }
                        var winTop = window.scrollTop(),
                            winBottom = winTop + winHeight;
                        var needsFix = top < winTop;
                        if (fixed != needsFix) {
                            fixed = needsFix;
                            elm.toggleClass('ok-scroll-to-fixed', fixed);
                        }
                    });
                }
            }
        });

})(angular, apeman, jQuery);
