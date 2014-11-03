/**
 * Page script for admin.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminBlogPage', [
            'ok.adminPage'
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'adminBlog';
        })
        .factory('blogOneDatasource', function (OneDatasource, BlogEntity, blogApiService) {
            return new OneDatasource({
                convert: function (data) {
                    return BlogEntity.new(data);
                },
                fetch: function (id, callback) {
                    blogApiService.one(id, callback);
                },
                create: function (data, callback) {
                    blogApiService.create(data, callback);
                },
                update: function (id, data, callback) {
                    blogApiService.update(id, data, callback);
                }
            });
        })
        .factory('blogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return new ListDatasource({
                convert: function (data) {
                    return data.map(BlogEntity.new);
                },
                fetch: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    blogApiService.list(query, callback);
                }
            });
        })
        .controller('AdminBlogCtrl', function ($scope) {

        })
        .controller('AdminBlogListCtrl', function ($scope, blogListDatasource, textSummarizeLogic) {
            ap.copy({
                more: function () {
                    blogListDatasource.load();
                },
                summarize: function (text) {
                    return textSummarizeLogic.summarize(text, 30);
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });
        });

})(angular, apeman);