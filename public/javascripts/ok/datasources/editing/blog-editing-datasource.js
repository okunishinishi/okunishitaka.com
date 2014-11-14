/**
 * Editing data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogEditingDatasource', function (EditingDatasource, BlogEntity, blogApiService) {
            return EditingDatasource.define(
                /** @lends BlogEditingDatasource.prototype */
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
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });
})(angular, apeman);