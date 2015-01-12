/**
 * @ngdoc filter
 * @filter htmlTextFilter
 * @description Html text filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('htmlTextFilter', function defineHtmlTextFilter() {
            return function htmlTextFilter(input) {
                try {
                    return $(input).text();
                } catch (e) {
                    return input;
                }
            };
        });
})(angular);