/**
 * @ngdoc module
 * @module ok.directives
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.constants',
            'ok.filters',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okCover
 * @description Ok cover.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okCover', function defineOkCover(partialUrlConstant) {
            return {
                scope: {
                    visible: '=okCoverVisible'
                },
                templateUrl: partialUrlConstant.COVER
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okFacebookButton
 * @description Ok facebook button.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFacebookButton', function defineOkFacebookButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=520712554606371&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
            }

            return {
                scope: {
                    href: '=okHref'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            var root = $('#fb-root');
                            if (!root.length) {
                                $('<div />').attr('id', 'fb-root').insertAfter($(elm));
                            }
                            loadSDK(document, 'script', 'facebook-jssdk');
                        }
                    }
                },
                template: '<div class="fb-like" data-href="{{href}}" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>'
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okFadeIn
 * @description Ok fade in.
*/
(function (ng, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okFadeIn', function defineOkFadeIn($timeout) {
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
                            $timeout(function () {
                                $(elm).fadeIn(duration);
                            }, delay);
                        }
                    }
                }
            }
        });

})(angular, jQuery);
/**
 * @ngdoc directive
 * @name okGoogleAnalytics
 * @description Ok google analytics.
*/
(function (ng) {
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
            }

            return {
                scope: {
                    trackingId: '=okTrackingId'
                },
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            loadSDK(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                            ga('create', scope.trackingId, 'auto');
                            ga('send', 'pageview');
                        }
                    }
                }
            }
        });

})(angular);
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
/**
 * @ngdoc directive
 * @name okScrollToFixed
 * @description Ok scroll to fixed.
 */
(function (ng, $) {
    "use strict";

    var name = 'okScrollToFixed';
    ng
        .module('ok.directives')
        .directive(name, function defineOkScrollToFixed($window, positionUtil) {
            return {
                compile: function () {
                    return {
                        post: function (scope, elm, attr) {
                            elm = $(elm);

                            var top, fixed = false, ready = false;
                            var window = $($window);
                            var content = $(attr[name]);

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

})(angular, jQuery);
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
/**
 * @ngdoc directive
 * @name okToast
 * @description Ok toast.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okToast', function defineOkToast() {
            return {
                scope: {
                    'messages': '=okToastMessages',
                    'icon': '=okIcon'
                },
                link: function (scope, elm) {
                    elm.addClass('ok-toast');
                    scope.$watch('messages', function (messages) {
                        var hasMessage = !!messages && (messages.length > 0);
                        elm.toggleClass('ok-toast-visible', hasMessage);
                        scope.data = [].concat(messages).map(function (message) {
                            return {message: message};
                        });
                    }, true);
                },
                template: [
                    '<div ng-repeat="d in data"><i class="ok-toast-icon fa fa-{{icon}}"></i>{{d.message}}</div>'
                ].join('')
            }
        });

})(angular);
/**
 * @ngdoc directive
 * @name okTwitterButton
 * @description Ok twitter button.
*/
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTwitterButton', function defineOkTwitterButton() {
            function loadSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }

            return {
                scope: {
                    href: '=okHref',
                    via: '=okVia'
                },
                compile: function () {
                    return {
                        post: function (scope, elm) {
                            loadSDK(document, 'script', 'twitter-wjs');
                        }
                    }
                },
                template: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="{{href}}" data-via="{{via}}">Tweet</a>'
            }
        });

})(angular);
