/**
 * Template cache service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService($templateCache) {
            var s = this;
            /**
             * Register a template.
             * @param {string} name - Template name.
             * @param {string} content - Template content.
             */
            s.register = function (name, content) {
                var isObj = typeof(arguments[0]) === 'object';
                if (isObj) {
                    var data = arguments[0];
                    Object.keys(data).forEach(function (key) {
                        s.register(key, data[key]);
                    });
                }
                $templateCache.put(name, content);
            };
        });

})(angular, apeman);