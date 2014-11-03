/**
 * Tag color logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap, one) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('tagColorLogic', function defineTagColorLogic(hashUtil) {
            return {
                tagColor: function (title, namespace) {
                    var seed = [title, namespace || ''].join('-'),
                        hashCode = hashUtil.toHashCode(seed);
                    var hue = parseInt(hashCode % 50 + 100) / 100.0;
                    var color = one.color('#a9d91d').hue(hue, true).hex();
                    if (!color.match(/^#/)) {
                        color = '#' + color;
                    }
                    return  color;
                }
            }
        });
})(angular, apeman, one);