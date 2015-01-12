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