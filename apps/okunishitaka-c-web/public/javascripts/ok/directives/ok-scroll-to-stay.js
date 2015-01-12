/**
 * @ngdoc directive
 * @name okScrollToStay
 * @description Ok scroll to stay.
 */
(function (ng) {
    "use strict";
    var name = 'okScrollToStay';
    ng
        .module('ok.directives')
        .directive(name, function defineOkScrollToStay($window, $document, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);
                            var window = $($window),
                                content = $(attr[name]);

                            var ready = false,
                                winHeight,
                                contentHeight,
                                scrollHeight,
                                _contentTop;

                            function clear() {
                                ready = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            }

                            function update() {
                                if (!content.length) {
                                    content = $(attr[name]);
                                }
                                if (!ready) {
                                    elm.height(elm.height());
                                    elm.width(elm.width());
                                    content.addClass('ok-fixed');
                                    winHeight = window.height();
                                    contentHeight = content.outerHeight(true);
                                    scrollHeight = $('body,html').prop('scrollHeight');
                                    _contentTop = null;

                                    ready = true;
                                }
                                var scrollRate = window.scrollTop() / (scrollHeight - winHeight);
                                var contentTop = Math.round((contentHeight - winHeight) * scrollRate);
                                if (contentTop < 0) contentTop = 0;

                                if (_contentTop != contentTop) {
                                    content.css({
                                        top: -contentTop
                                    });
                                    _contentTop = contentTop;
                                }
                            }

                            window.scroll(function () {
                                update();
                            });
                            window.resize(function () {
                                clear();
                                update();
                            });
                            clear();
                        }
                    }
                }
            }
        });


})(angular);