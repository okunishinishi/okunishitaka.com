/**
 * @ngdoc module
 * @module ok.profilePage
 * @description Page script for profile.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'profile';
        })
        .directive('okProfileList', function (partialUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    $(elm).addClass('profile-list-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData'
                },
                templateUrl: partialUrlConstant.PROFILE_LIST
            }
        })
        .directive('okProfileTable', function (partialUrlConstant, imageUrlConstant) {
            return {
                link: function (scope, elm, attr) {
                    scope.images = imageUrlConstant;
                    $(elm).addClass('profile-table-container');
                },
                scope: {
                    id: '=okId',
                    caption: '=okCaption',
                    data: '=okData'
                },
                templateUrl: partialUrlConstant.PROFILE_TABLE
            }
        })
        .controller('ProfileCtrl', function defineProfileCtrl($scope,
                                                              profileApiService,
                                                              errorHandleService) {
            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load() {
                $scope.loading = true;
                profileApiService.one(null)
                    .then(function (profile) {
                        $scope.profile = profile;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            load();
        });

})(angular);