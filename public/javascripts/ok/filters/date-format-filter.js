/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                date = new Date(date);
                return [
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                ].join('/')
            };
        });
})(angular, apeman);