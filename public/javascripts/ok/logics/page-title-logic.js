/**
 * Page title logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('pageTitleLogic', function definePageTitleLogic(metaConstant) {
            return {
                /**
                 * Get title for a page.
                 * @param {object} l - Locale object.
                 * @param {string} pageName - Page name.
                 */
                tilteForPage: function (l, pageName) {
                    var appName = l.meta.NAME;
                    if (!pageName) {
                        return appName;
                    }
                    pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                    return [pageName, appName].join(' - ');
                }
            }
        });
})(angular, apeman);