/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter() {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                return [pageName, appName].join(' - ');
            };
        });
})(angular, apeman);