/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.filters',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc directive
 * @name okAlias
 * @description Ok alias.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okAlias', function defineOkAlias($parse) {
            return {
                link: function (scope, elm, attr) {
                    var alias = $parse(attr.okAlias)(scope);
                    if (!alias) {
                        return;
                    }
                    var values = {};
                    Object.keys(alias).forEach(function (key) {
                        var expression = alias[key];
                        scope.$watch(expression, function (value) {
                            values[key] = value;
                        }, true);
                        Object.defineProperty(scope, key, {
                            get: function () {
                                return values[key];
                            },
                            set: function (value) {
                                var msg = [
                                    'You can not set value with key "' + key + '"',
                                    'because it is defined as alias key by okAlias directive.'
                                ].join(',');
                                throw new Error(msg);
                            }
                        });
                    });
                }
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okButton
 * @description Ok button.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okButton', function defineOkButton() {
            return {
                scope: {
                    type: '=okButtonType'
                },
                link: function (scope, elm, attr) {
                    var $elm = $(elm);
                    $elm.addClass('button')
                        .attr({
                            href: $elm.attr('href') || 'javascript:void(0)'
                        }
                    );
                    switch (scope.type) {
                        case 'button-primary':
                        case 'primary':
                            $elm.addClass('button-primary');
                            break;
                        case 'link':
                            $elm.addClass('link-button');
                            break;
                    }
                }
            }
        })
    ;

})
(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okFacebookButton
 * @description Ok facebook button.
 */
(function (ng, ap, $, document) {
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

})(angular, apeman, jQuery, document);
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

                            var content = $(attr.okScrollToStay);

                            var ready = false,
                                winHeight,
                                contentHeight,
                                scrollHeight,
                                _contentTop;

                            function clear() {
                                ready = false;
                                content.removeClass('ok-fixed');
                                elm.removeAttr('style');
                            };
                            function update() {
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

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okTag
 * @description Ok tag.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okTag', function defineOkTag() {
            return {
                scope: {
                    title: '=okTitle'
                },
                link: function (scope, elm) {
                },
                template: [
                    '<span class="ok-tag" style="border-color: {{title | tagColorFilter}};color:{{title | tagColorFilter}};">',
                    '<span class="ok-tag-icon" style="background-color: {{title | tagColorFilter}};"></span>',
                    '{{title}}',
                    '</span>'
                ].join('')
            }
        });

})(angular, apeman);
/**
 * @ngdoc directive
 * @name okToast
 * @description Ok toast.
 */
(function (ng, ap, $) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okToast', function defineOkToast() {
            return {
                scope: {
                    'messages': '=okToastMessages'
                },
                link: function (scope, elm) {
                    var $elm = $(elm).addClass('ok-toast');
                    scope.$watch('messages', function (messages) {
                        var hasMessage = !!messages && (messages.length > 0);
                        $elm.toggleClass('ok-toast-visible', hasMessage);
                    }, true);
                },
                template: [
                    '<div ng-repeat="m in [].concat(messages)">{{m}}</div>',
                ].join('')
            }
        });

})(angular, apeman, jQuery);
/**
 * @ngdoc directive
 * @name okTwitterButton
 * @description Ok twitter button.
 */
(function (ng, ap, $, document) {
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

})(angular, apeman, jQuery, document);
