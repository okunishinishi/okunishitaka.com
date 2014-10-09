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
 * Canvas util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('canvasUtil', function defineCanvasUtil($window) {
            var canvasUtil = {
                get devicePixelRatio() {
                    return $window.devicePixelRatio || 1
                },
                /**
                 * Optimize canvas pixel rate.
                 * @param {HTMLElement} canvas
                 */
                optimizeCanvasRatio: function (canvas) {
                    var ratio = canvasUtil.devicePixelRatio;
                    if (!ratio) {
                        return;
                    }
                    var w = canvas.width,
                        h = canvas.height;
                    canvas.width = w * ratio;
                    canvas.height = h * ratio;
                    canvas.getContext('2d').scale(ratio, ratio);
                    canvas.style.width = w + 'px';
                    canvas.style.height = h + 'px';
                },
                /**
                 * Create a new canvas.
                 * @param {nubmer} width - Canvas width.
                 * @param {number} height - Canvas height.
                 * @returns {*}
                 */
                newCanvas: function (width, height) {
                    var canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    canvasUtil.optimizeCanvasRatio(canvas);
                    return canvas;
                }
            }
            return canvasUtil;
        });
})(angular, apeman);
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
/**
 * Position util.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.utils')
        .factory('positionUtil', function definePositionUtil($window) {
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
        .factory('urlUtil', function defineUrlUtil() {
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
                },
                /**
                 * Get host name from url.
                 * @param url
                 */
                hostnameInUrl: function (url) {
                    return ap.parseURL(url).hostname;
                }
            }
        });
})(angular, apeman);
