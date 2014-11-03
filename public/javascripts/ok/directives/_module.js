/**
 * ok directives module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.directives', [
            'ok.utils',
            'ok.logics'
        ]);
})(angular);
