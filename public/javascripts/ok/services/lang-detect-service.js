/**
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(appConstant, $location, urlUtil) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0];

            s.SUPPORTED_LANGS = SUPPORTED_LANGS;
            s.DEFAULT_LANG = DEFAULT_LANG;
            /**
             * Get rang from url
             * @param {string} url - Url to work with.
             * @param {string[]} supportedLangs - Supported lang names.
             * @returns {string} - Detected lang.
             * @private
             */
            s._langWithURL = function (url, supportedLangs) {
                supportedLangs = [].concat(supportedLangs);
                var hostname = urlUtil.hostnameInUrl(url),
                    subdomain = hostname.split(/\./g).shift();
                for (var i = 0; i < supportedLangs.length; i++) {
                    var lang = supportedLangs[i];
                    if (lang === subdomain) {
                        return lang;
                    }
                }
                return null;
            };
            /**
             * Detect a lang.
             * @returns {string} - Detected lang.
             */
            s.detectLang = function () {
                var url = $location.href;
                return s._langWithURL(url, SUPPORTED_LANGS) || DEFAULT_LANG;
            };

        });

})(angular, apeman);