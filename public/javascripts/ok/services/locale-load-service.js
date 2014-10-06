/**
 * Locale load service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeLoadService', function LocaleLoadService(apLocaleService, localeConstant) {
            var s = this;
            Object.keys(localeConstant).forEach(function (lang) {
                apLocaleService.register(lang, localeConstant[lang]);
            });

            /**
             * Get locale data for a lang.
             * @param {string} lang - Lang.
             * @returns {object} - Locale data.
             */
            s.localeForLang = function (lang) {
                return apLocaleService.localeForLang(lang);
            };
        });

})(angular, apeman);