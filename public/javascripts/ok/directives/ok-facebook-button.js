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