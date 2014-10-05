/**
 * Location resolve service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService($window, urlUtil) {
            var s = this;

            s.baseUrl = urlUtil.baseUrlWithLocation($window.location);

            s.resolveUrl = function (url) {
                if (!url) {
                    return url;
                }
                if (url.match(/^\//)) {
                    return urlUtil.joinUrl(s.baseURL, url);
                }
                return urlUtil.joinUrl($window.location.href, url);
            }

        });

})(angular, apeman);