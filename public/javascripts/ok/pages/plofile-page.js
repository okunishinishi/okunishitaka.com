/**
* Page script for plofile.
* @requires angular
*/

(function (ng) {
    "use strict";

    ng
        .module('ok.plofilePage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'plofile';
        })
        .controller('PlofileCtrl', function ($scope) {

        });

})(angular);