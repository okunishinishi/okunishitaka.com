/**
 * Page script for blog.
 * @requires angular
 * @retuires apeman
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {

        })
        .factory('BlogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return ListDatasource.define({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    blogApiService.list(query)
                        .success(function (data, status) {
                            callback(null, data);
                        })
                        .error(function () {
                            callback(new Error('Failed to fetch'));
                        });
                }
            });
        })
        .controller('BlogCtrl', function ($scope, BlogListDatasource) {

            var listDatasource = new BlogListDatasource({

            });

            ap.copy({
                list: listDatasource,
                edit: function (blog) {

                }
            }, $scope);

            $scope.list.load();
        });

})(angular, apeman);