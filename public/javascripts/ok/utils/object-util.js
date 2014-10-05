/**
 * Object utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('objectUtil', function defineObjectUtil() {
            return {
                /**
                 * Get key of object for a value.
                 * @param {object} obj - Object to find.
                 * @param {*} value - Value to detect.
                 * @returns {string[]} - Keys.
                 */
                keysForValue: function (obj, value) {
                    if (!obj) {
                        return null;
                    }
                    var result = [],
                        keys = Object.keys(obj);
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i],
                            hit = obj[key] === value;
                        if (hit) {
                            result.push(key);
                        }
                    }
                    return result;
                }
            }
        });
})(angular, apeman);