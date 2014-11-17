/**
 * @ngdoc module
 * @module ok.profilePage
 * @description Page script for profile.
 */

(function (ng, $) {
    "use strict";

    ng
        .module('ok.profilePage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
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
                    data: '=okData',
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
                    data: '=okData',
                },
                templateUrl: partialUrlConstant.PROFILE_TABLE
            }
        })
        .controller('ProfileCtrl', function ($scope, profileApiService) {
            $scope.profile = null;
            profileApiService.singleton()
                .then(function resolve(data) {
                    $scope.profile = data;

                })
                .then(function rejected(err) {
                    //TODO
                });
        });

})(angular, jQuery);