/**
 * @ngdoc object
 * @name objectUtil
 * @description Object util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('objectUtil', function defineObjectUtil(apObjectUtil) {
            var u = {};
            u.__proto__ = apObjectUtil;
            return u;
        });
})(angular);