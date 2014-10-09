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