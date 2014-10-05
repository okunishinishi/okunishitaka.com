/**
 * URL utility.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.utils')
        .factory('urlUtil', function defineUrlUtil() {
            return {
                /**
                 * Get base url for a location.
                 * @param location - Location object.
                 * @returns {string} - Base url string.
                 */
                baseUrlWithLocation: function (location) {
                    return location.origin || [
                        [location.protocol, location.hostname].join("//"),
                        (location.port ? ':' + location.port : '')
                    ].join('');
                },
                /**
                 * Join url.
                 * @param [string...] components - Pathnames to join.
                 * @returns {string} - Joined url.
                 */
                joinUrl: function (/** components **/) {
                    return Array.prototype.slice.call(arguments, 0).reduce(function (result, current) {
                        if (!result) {
                            return current;
                        }
                        var joiner = result.match(/\/$/) ? '' : '/';
                        return [result, current].join(joiner);
                    }, null);
                },
                /**
                 * Get host name from url.
                 * @param url
                 */
                hostnameInUrl: function (url) {
                    return ap.parseURL(url).hostname;
                }
            }
        });
})(angular, apeman);