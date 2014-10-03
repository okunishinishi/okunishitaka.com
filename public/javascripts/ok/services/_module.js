/**
 * ok services module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'ok.constants',
            'ok.entities'
        ]);
})(angular);
