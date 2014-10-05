/**
 * ok utils module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.utils', [
            
        ]);
})(angular);

/**
 * Object utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('objectUtil', function () {
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
/**
 * URL utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.utils')
        .factory('urlUtil', function urlUtil() {
            return {
                /**
                 * Get base url for a location.
                 * @param location - Location object.
                 * @returns {string} - Base url string.
                 */
                baseUrlWithLocation: function (location) {
                    return location.origin || [
                        [location.protocol, location.hostname].join("//"),
                        (location.port ? ':' + location.port : '')
                    ].join('');
                },
                /**
                 * Join url.
                 * @param [string...] components - Pathnames to join.
                 * @returns {string} - Joined url.
                 */
                joinUrl: function (/** components **/) {
                    return Array.prototype.slice.call(arguments, 0).reduce(function (result, current) {
                        if (!result) {
                            return current;
                        }
                        var joiner = result.match(/\/$/) ? '' : '/';
                        return [result, current].join(joiner);
                    }, null);
                }
            }
        });
})(angular, apeman);
