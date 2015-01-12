/**
 * @ngdoc module
 * @module ok.services
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'ap.services',
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);
