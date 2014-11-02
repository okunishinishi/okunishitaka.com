/**
 * @ngdoc directive
 * @name okFadein
 * @description Ok fadein.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFadeIn', function defineOkFadein() {
            return {
                scope: {
                    duration: '=okDuration',
                    delay: '=okDelay'
                },
                compile: function () {
                    return {
                        pre: function (scope, elm) {
                            $(elm).hide();
                        },
                        post: function (scope, elm) {
                            var delay = Number(scope.delay || 0),
                                duration = Number(scope.duration || 0);
                            setTimeout(function () {
                                $(elm).fadeIn(duration);
                            }, delay);
                        }
                    }
                }
            }
        });

})(angular, apeman, jQuery);