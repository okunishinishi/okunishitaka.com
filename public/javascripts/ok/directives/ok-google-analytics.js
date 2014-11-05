/**
 * @ngdoc directive
 * @name okGoogleAnalytics
 * @description Ok google analytics.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okGoogleAnalytics', function defineOkGoogleAnalytics() {
            function loadSDK(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            };

            return {
                scope: {
                    trakingId: '=okTrackingId'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            loadSDK(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                            ga('create', scope.trakingId, 'auto');
                            ga('send', 'pageview');
                        }
                    }
                }
            }
        });

})(angular, apeman);