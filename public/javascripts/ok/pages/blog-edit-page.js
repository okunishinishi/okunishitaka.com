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

})(angular, apeman);