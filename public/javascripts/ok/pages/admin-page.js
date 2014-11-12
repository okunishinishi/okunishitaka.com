/**
 * @ngdoc module
 * @module ok.adminPage
 * @description Page script for admin.
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'admin';
        })
        .controller('AdminCtrl', function ($scope) {
        })
    ;
})(angular, apeman);