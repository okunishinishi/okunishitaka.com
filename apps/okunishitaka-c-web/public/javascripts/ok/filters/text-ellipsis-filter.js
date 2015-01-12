/**
 * @ngdoc filter
 * @filter textEllipsisFilter
 * @description Text ellipsis filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textEllipsisFilter', function defineTextEllipsisFilter() {
            return function textEllipsisFilter(text, maxLength) {
                if (!text) {
                    return '';
                }
                var suffix = '...';
                return text.substr(0, maxLength - suffix.length) + suffix;
            };
        });
})(angular);