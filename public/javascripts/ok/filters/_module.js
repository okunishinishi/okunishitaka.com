/**
 * ok filters module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.entities',
            'ok.utils',
            'ok.services'
        ]);
})(angular);
