/**
 * @ngdoc object
 * @name urlFormatService
 * @description Url format service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService(apUrlFormatService) {
            var s = this;
            s.__proto__ = apUrlFormatService;
        });

})(angular);