/**
 * @ngdoc directive
 * @name okScrollToStay
 * @description Ok scroll to stay.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okScrollToStay', function defineOkScrollToStay($window, $document, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);
                            var window = $($window)
                            elm.css({
                                width: elm.width(),
                                height: elm.height()
                            });
                            var content = $(attr.okScrollToStay);
                            content.addClass('ok-fixed');


                            var ready = false,
                                winHeight,
                                contentHeight,
                                scrollHeight;

                            function clear() {
                                ready = false;
                            };
                            function update() {
                                if (!ready) {
                                    winHeight = window.height();
                                    contentHeight = content.outerHeight(true);
                                    scrollHeight = $('body,html').prop('scrollHeight');
                                    ready = true;
                                }
                                var scrollRate = window.scrollTop() / (scrollHeight - winHeight);
                                var contentTop = (contentHeight - winHeight) * scrollRate;
                                if (contentTop < 0) contentTop = 0;
                                content.css({top: -contentTop});
                            }

                            window.scroll(function () {
                                update();
                            });
                            window.resize(function () {
                                clear();
                                update();
                            });
                        }
                    }
                }
            }
        });

})(angular, apeman);