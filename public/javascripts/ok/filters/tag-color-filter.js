/**
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, ap) {
    "use strict";
    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var cahched = _cache[seed];
                if (cahched) {
                    return cahched;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 50 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, apeman);