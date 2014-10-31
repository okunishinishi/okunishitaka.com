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
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);

                            var top, fixed = false, ready = false;
                            var window = $($window);
                            var content = $(attr.okScrollToFixed);

                            function clear() {
                                ready = false;
                                fixed = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            }

                            function update() {
                                if (!ready) {
                                    top = positionUtil.offsetSum(elm).top;
                                    elm.height(elm.height());
                                    ready = true;
                                }
                                var winTop = window.scrollTop();
                                var needsFix = top < winTop;
                                if (fixed != needsFix) {
                                    fixed = needsFix;
                                    content.toggleClass('ok-fixed', fixed);
                                }
                            }

                            window.resize(function () {
                                clear();
                                update();
                            });
                            window.scroll(function () {
                                update();
                            });

                        }
                    }
                }
            }
        });

})(angular, apeman, jQuery);