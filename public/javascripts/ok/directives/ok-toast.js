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