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
            'ngSanitize' // ng-bind-html requires ng sanitize.
        ])
        .run(function ($rootScope) {
            $rootScope.page = 'blog';
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
        .controller('BlogCtrl', function ($scope, blogListDatasource, blogOneDatasource) {
            ap.copy({
                edit: function (blog) {
                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.data = blog;
                    $scope.isEditing = true;
                },
            }, $scope);

            blogListDatasource.load();


            $scope.edit({
                title: 'blog-test00',
                content: 'blog-content00',
                status: '0'
            }); //FIXME

        })
        .controller('BlogListCtrl', function ($scope, blogListDatasource) {
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
        .controller('BlogAsideCtrl', function ($scope, blogListDatasource) {
            ap.copy({
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
        .controller('BlogDetailCtrl', function ($scope) {

        })
        .controller('BlogEditCtrl', function ($scope, blogOneDatasource, markdownRenderService) {
            ap.copy({
                save: function (blog) {
                    blogOneDatasource.data = blog;
                    blogOneDatasource.save(function (err, data) {

                    });
                },
                cancel: function () {
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
                        return {
                            title: blog.title,
                            content: markdownRenderService.render(blog.content)
                        }
                    }
                }
            });
        })
    ;

})(angular, apeman);