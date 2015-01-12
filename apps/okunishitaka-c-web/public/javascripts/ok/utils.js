/**
 * @ngdoc module
 * @module ok.utils
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.utils', [
            'ap.utils'
        ]);
})(angular);

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
/**
 * @ngdoc object
 * @name hashUtil
 * @description Hash util.
 */
(function (ng) {
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
})(angular);
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
/**
 * @ngdoc object
 * @name positionUtil
 * @description Position util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('positionUtil', function definePositionUtil() {
            return {
                /**
                 * Get offset from window.
                 * @param {HTMLElement} elm
                 * @returns {{top: number, left: number}}
                 */
                offsetSum: function (elm) {
                    var top = 0, left = 0;
                    if (elm[0]) elm = elm[0]; //Remove jquery.
                    while (elm) {
                        top = top + parseInt(elm.offsetTop, 10);
                        left = left + parseInt(elm.offsetLeft, 10);
                        elm = elm.offsetParent;
                    }
                    return {top: top, left: left};
                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name stringUtil
 * @description String util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('stringUtil', function defineStringUtil(apStringUtil) {
            var u = {};
            u.__proto__ = apStringUtil;
            return u
        });
})(angular);
