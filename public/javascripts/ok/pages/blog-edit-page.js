/**
 * Page script for blogEdit.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogEditPage', [
            'ok.page',
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'blogEdit';
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
                    blogApiService.list(query, callback);
                }
            });
        })
        .controller('BlogEditCtrl', function ($scope, blogListDatasource) {
            blogListDatasource.load();

        })
        .controller('BlogEditEditorCtrl', function ($scope, blogOneDatasource, markdownRenderService, BlogEntity) {
            ap.copy({
                save: function (blog) {
                    blogOneDatasource.data = blog;
                    blogOneDatasource.save(function (err, data) {

                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {

                }
            }, $scope);
            Object.defineProperties($scope, {
                blog: {
                    get: function () {
                        return blogOneDatasource.data;
                    }
                },
                preview: {
                    get: function () {
                        var blog = $scope.blog;
                        if (!blog) {
                            return {};
                        }
                        return {
                            title: blog.title,
                            content: markdownRenderService.render(blog.content)
                        }
                    }
                }
            });
        })
        .controller('BlogEditListCtrl', function ($scope, blogListDatasource) {
            ap.copy({
                /**
                 * Load more data.
                 */
                more: function () {
                    blogListDatasource.load();
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });
        })

})(angular, apeman);