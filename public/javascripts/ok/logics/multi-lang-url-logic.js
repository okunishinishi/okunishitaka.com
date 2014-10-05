/**
 * Multi lang url logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('multiLangUrlLogic', function defineMultiLangUrlLogic(urlUtil) {
            return {
                /**
                 * Get lang for url.
                 */
                langForUrl: function (url, supportedLangs) {
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
                }
            }
        });
})(angular, apeman);