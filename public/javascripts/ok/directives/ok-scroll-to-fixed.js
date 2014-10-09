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

                    var top, fixed = false;
                    var window = $($window);

                    function clear() {
                        top = null;
                        elm.css('height', 'auto');
                    }

                    function update() {
                        if (!top) {
                            top = positionUtil.offsetSum(elm).top;
                        }
                        var winTop = window.scrollTop();
                        var needsFix = top < winTop;
                        if (fixed != needsFix) {
                            fixed = needsFix;
                            elm.height(elm.height());
                            $(attr.okScrollToFixed).toggleClass('ok-fixed', fixed);
                        }
                    }


                    window.resize(function () {
                        clear();
                    });
                    window.scroll(function () {
                        update();
                    });
                }
            }
        });

})(angular, apeman, jQuery);