/**
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, one) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var _cached = _cache[seed];
                if (_cached) {
                    return _cached;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 41 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, one);