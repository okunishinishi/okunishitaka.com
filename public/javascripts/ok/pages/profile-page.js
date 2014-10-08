/**
 * Page script for profile.
 * @requires angular
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'profile';
        })
        .controller('ProfileCtrl', function ($scope, profileApiService) {
            profileApiService.singleton(function (err, profile) {
                $scope.profile = profile;
            });
        });

})(angular);