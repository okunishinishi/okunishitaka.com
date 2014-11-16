/**
 * @ngdoc object
 * @name BlogDestroyingDatasource
 * @description Destoying data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogDestroyingDatasource', function (DestroyingDatasource, BlogEntity, blogApiService) {
            return DestroyingDatasource.define(
                /** @lends BlogDestroyingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _destroyRequest: function (id, callback) {
                        blogApiService.destroy(id, callback);
                    },
                }
            );
        });
})(angular, apeman);