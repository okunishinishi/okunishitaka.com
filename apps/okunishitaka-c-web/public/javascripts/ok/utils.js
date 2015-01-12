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
