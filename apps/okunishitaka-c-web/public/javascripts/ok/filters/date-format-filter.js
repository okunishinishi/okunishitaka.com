/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, moment) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                return moment(date).format('YYYY/MM/DD');
            };
        });
})(angular, moment);