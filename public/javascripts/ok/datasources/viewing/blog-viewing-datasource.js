/**
 * @ngdoc object
 * @name BlogViewingDatasource
 * @description View data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogViewingDatasource', function (ViewingDatasource, BlogEntity, blogApiService) {
            return ViewingDatasource.define(
                /** @lends BlogViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });

})(angular, apeman);