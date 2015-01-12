/**
 * @ngdoc directive
 * @name okCover
 * @description Ok cover.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.directives')
        .directive('okCover', function defineOkCover(partialUrlConstant) {
            return {
                scope: {
                    visible: '=okCoverVisible'
                },
                templateUrl: partialUrlConstant.COVER
            }
        });

})(angular);