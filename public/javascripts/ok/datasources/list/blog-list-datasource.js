/**
 * List data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    blogApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(BlogEntity.new);
                }
            });
        });

})(angular, apeman);