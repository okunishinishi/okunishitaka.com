/**
 * ok pages module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.pages', [
            'apeman',
            'ok.constants',
            'ok.datasources',
            'ok.entities',
            'ok.errors',
            'ok.services',
            'ok.utils'
        ]);
})(angular);
