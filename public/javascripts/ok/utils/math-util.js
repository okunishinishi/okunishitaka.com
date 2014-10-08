/**
 * Math util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('mathUtil', function defineMathUtil() {
            return {
                /**
                 * Get random value.
                 * @returns {number} - Random value.
                 */
                random: Math.random.bind(Math),
                /**
                 * Get random int.
                 * @param {number} [min=0] - Min value.
                 * @param {number} [max=Infinity] - Max value.
                 */
                randomInt: function (min, max) {
                    min = (min === undefined) ? 0 : min;
                    max = (max === undefined) ? Infinity : max;
                    var range = max - min;
                    return parseInt(Math.random() * range, 10) + min;
                },
                /**
                 * Round a value.
                 * @param {number} value - Value to round.
                 * @returns {number} - Rounded value.
                 */
                round: Math.round.bind(Math)
            }
        });
})(angular, apeman);