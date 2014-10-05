/**
 * ok indices module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.entities',
            'ok.logics',
            'ok.utils'
        ]);
})(angular);
