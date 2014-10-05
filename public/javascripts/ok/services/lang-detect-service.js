/**
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(metaConstant, $location, multiLangUrlLogic) {
            var s = this,
                SUPPORTED_LANGS = metaConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0];

            s.SUPPORTED_LANGS = SUPPORTED_LANGS;
            s.DEFAULT_LANG = DEFAULT_LANG;
            s.detectLang = function () {
                var url = $location.href;
                return multiLangUrlLogic.langForUrl(url, SUPPORTED_LANGS) || DEFAULT_LANG;
            };

        });

})(angular, apeman);