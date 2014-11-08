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
                    _getRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        blogApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        blogApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        blogApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(BlogEntity.new);
                    }
                }
            );
        });
})(angular, apeman);