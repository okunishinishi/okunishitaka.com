/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.constants',
            'ok.filters'
        ]);
})(angular);

/**
 * Ok meta.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okMeta', function defineOkMeta() {
            return {
                restrict: 'A',
                scope: {
                    meta: '=okMeta',
                    config: '=okConfig'
                },
                link: function (scope, elm, attrs) {
                    console.log(scope.meta, scope.config);
                }
            }
        });

})(angular, apeman);
