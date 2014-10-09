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