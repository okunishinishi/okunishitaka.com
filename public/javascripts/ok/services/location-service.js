/**
 * Location service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationService', function LocationService($window, $anchorScroll, urlUtil) {
            var s = this;

            /**
             * Change windows location.
             * @param {string} url - URL
             */
            s.changeTo = function (url) {
                $window.location.href = url;
            };

            /**
             *  Go to root page for current location.
             */
            s.changeToTopPage = function () {
                s.changeTo('/');
            }

            /**
             * Scroll to hash.
             * @param {string} hash - A url hash (dom element id).
             */
            s.scrollToHash = function (hash) {
                hash = hash.replace(/^#/, '');
                $location.hash(hash);
                $anchorScroll();
            }


            s.baseUrl = urlUtil.baseUrlWithLocation($window.location);

            s.resolveUrl = function (url) {

            }

        });

})(angular, apeman);