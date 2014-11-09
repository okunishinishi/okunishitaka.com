/**
 * Page script for admin.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.adminBlogPage', [
            'ok.adminPage',
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
        })
        .factory('blogOneDatasource', function (BlogOneDatasource) {
            return new BlogOneDatasource({});
        })
        .factory('blogListDatasource', function (BlogListDatasource) {
            return new BlogListDatasource({});
        })
        .controller('AdminBlogCtrl', function ($scope, BlogEditor) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogOneDatasource, blogListDatasource, markdownRenderService) {
            ap.copy({
                save: function (blog) {
                    blogOneDatasource.data = blog;
                    blogOneDatasource.save(function (err, data) {
                        blogOneDatasource.clear();
                        blogListDatasource.load();
                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {
                    $scope.editing = false;
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
        .controller('AdminBlogListCtrl', function ($scope, blogOneDatasource, blogListDatasource, textSummarizeLogic) {
            ap.copy({
                edit: function (blog) {
                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load();
                },
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
            blogListDatasource.load();
        });

})(angular, apeman);