/**
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(localeConstant,
                                                                 $location,
                                                                 multiLangUrlLogic) {
            var s = this;

            s.supportedLangs = Object.keys(localeConstant);

            var defaultLang = 'en';//FIXME

            s.detectLang = function () {
                var url = $location.href;
                return multiLangUrlLogic.langForUrl(url, s.supportedLangs) || defaultLang;
            };

        });

})(angular, apeman);