/**
 * @ngdoc filter
 * @filter textSplitFilter
 * @description Text split filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textSplitFilter', function defineTextSplitFilter() {
            return function textSplitFilter(text, seperator) {
                if (!text) {
                    return [];
                }
                return String(text).split(seperator || ',');
            };
        });
})(angular, apeman);