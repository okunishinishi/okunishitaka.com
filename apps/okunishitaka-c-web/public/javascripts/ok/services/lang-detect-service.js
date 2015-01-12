/**
 * @ngdoc object
 * @name langDetectService
 * @description Lang detect service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(apLangDetectService, appConstant) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0] || null;
            s.__proto__ = apLangDetectService;

            s.detectLang = function () {
                return apLangDetectService.detectLang(SUPPORTED_LANGS) || DEFAULT_LANG;
            }
        });

})(angular);