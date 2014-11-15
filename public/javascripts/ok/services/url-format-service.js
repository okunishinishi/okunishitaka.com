/**
 * Url format service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService() {
            var s = this;
            /**
             * Format a url
             * @param {string} urlString - Url string.
             * @param {object} data - Data to format.
             */
            s.formatUrl = function (urlString, data) {
                var joiner = '/';
                return urlString
                    .split(joiner)
                    .map(function (pathname) {
                        var isVariable = pathname.match(/^:/);
                        if (isVariable) {
                            var key = pathname.replace(/^:/, '');
                            if (!data.hasOwnProperty(key)) {
                                throw new Errror('Missing key:', pathname);
                            }
                            return data[key];
                        }
                        return pathname;
                    })
                    .join(joiner);
            }
        });

})(angular, apeman);