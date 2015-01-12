/**
 * @ngdoc object
 * @name templateCacheService
 * @description Template cache service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService(apTemplateCacheService) {
            var s = this;
            s.__proto__ = apTemplateCacheService;
        });

})(angular);