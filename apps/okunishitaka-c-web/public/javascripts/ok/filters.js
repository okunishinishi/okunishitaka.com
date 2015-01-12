/**
 * @ngdoc module
 * @module ok.filters
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter(stringUtil) {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                var pageNames = l.pageNames || {};
                pageName = pageNames[stringUtil.underscorize(pageName).toUpperCase()];
                if (!pageName) {
                    return appName;
                }
                return [pageName, appName].join(' - ');
            };
        });
})(angular);
