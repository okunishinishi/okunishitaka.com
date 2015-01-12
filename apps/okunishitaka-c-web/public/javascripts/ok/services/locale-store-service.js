/**
 * @ngdoc object
 * @name localeStoreService
 * @description Locale store service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeStoreService', function LocaleStoreService(apLocaleStoreService, localeConstant) {
            var s = this;
            s.__proto__ = apLocaleStoreService;
            s._locales = {};
            s.registerAll(localeConstant);

        });

})(angular);