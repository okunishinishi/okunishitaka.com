/**
 * @ngdoc directive
 * @name okToast
 * @description Ok toast.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okToast', function defineOkToast() {
            return {
                scope: {
                    'messages': '=okToastMessages'
                },
                link: function (scope) {
                    console.log('scope', scope);
                },
                template: '<div ng-repeat="m in [].concat(messages)">{{m}}</div>'
            }
        });

})(angular, apeman);