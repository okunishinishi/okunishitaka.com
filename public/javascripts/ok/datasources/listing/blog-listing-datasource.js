/**
 * @ngdoc object
 * @description List data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListingDatasource', function (ListingDatasource, BlogEntity, blogApiService) {
            return ListingDatasource.define(
                /** @lends BlogListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        blogApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(BlogEntity.new);
                    }
                }
            );
        });

})(angular, apeman);