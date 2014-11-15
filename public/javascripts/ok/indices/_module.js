/**
 * ok indices module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.indices', [
            'ok.constants',
            'ok.datasources',
            'ok.entities',
            'ok.errors',
            'ok.services',
            'ok.templates',
            'ok.utils'
        ]);
})(angular);
