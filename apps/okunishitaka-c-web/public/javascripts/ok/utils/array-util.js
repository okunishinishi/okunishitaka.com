/**
 * @ngdoc object
 * @name arrayUtil
 * @description Array util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('arrayUtil', function defineArrayUtil(apArrayUtil) {
            var arrayUtil = {};
            arrayUtil.__proto__ = apArrayUtil;
            return arrayUtil;
        });
})(angular);