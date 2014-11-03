/**
 * Hash util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('hashUtil', function defineHashUtil() {
            return {
                /**
                 * Get hash code for string value.
                 * @param {string} value - String to hash.
                 * @returns {number} - Hash code.
                 */
                toHashCode: function (value) {
                    return value.split("").reduce(function (a, b) {
                        a = ((a << 5) - a) + b.charCodeAt(0);
                        return a & a
                    }, 0);
                }
            }
        });
})(angular, apeman);