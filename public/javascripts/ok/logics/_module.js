/**
 * ok logics module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.logics', [
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);
