/**
 * One data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogOneDatasource', function (OneDatasource, BlogEntity, blogApiService) {
            return OneDatasource.define(
                /** @lends BlogOneDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _createRequest: function (data, callback) {
                        blogApiService.create(data, callback);
                    },
                    _updateRequest: function (id, data, callback) {
                        blogApiService.update(id, data, callback);
                    },
                    _destroyRequest: function (id, callback) {
                        blogApiService.destroy(id, callback);
                    },
                    _parseData: function (data) {
                        return data.map(BlogEntity.new);
                    }
                }
            );
        });
})(angular, apeman);