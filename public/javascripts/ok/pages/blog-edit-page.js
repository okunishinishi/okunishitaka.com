/**
 * Page script for blogEdit.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.blogEditPage', [
            'ok.page',
            'ngSanitize' // ng-bind-html requires ng sanitize.
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
                    query._sort = '_at';
                    query._reverse = 'true';
                    blogApiService.list(query, callback);
                }
            });
        })
        .controller('BlogEditCtrl', function ($scope, blogListDatasource, blogOneDatasource) {
            $scope.status = {};
            $scope.status.isEditing = false;
            blogListDatasource.load();
            ap.copy({
                edit: function (blog) {
                    $scope.status.isEditing = true;
                    blogOneDatasource.clear();
                    var id = blog && blog.id;
                    if (!id) {
                        return;
                    }
                    blogOneDatasource.fetch(id, function () {

                    });
                },
                destroy: function (blog) {

                }
            }, $scope);
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
                    $scope.status.isEditing = false;
                }
            }, $scope);
            Object.defineProperties($scope, {
                blog: {
                    get: function () {
                        return blogOneDatasource.data;
                    },
                    set: function (blog) {
                        blogOneDatasource.data = blog;
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
        .controller('BlogEditListCtrl', function ($scope, blogListDatasource, textSummarizeLogic) {
            ap.copy({
                more: function () {
                    blogListDatasource.load();
                },
                summarize: function (text) {
                    return textSummarizeLogic.summaize(text, 30);
                }
            }, $scope);

            Object.defineProperties($scope, {
                blogs: {
                    get: function () {
                        return blogListDatasource.data;
                    }
                }
            });

            $scope.edit();//FIXME
        });

})(angular, apeman);