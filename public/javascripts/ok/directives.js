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
                        console.log(needsFix, top, winTop);
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
