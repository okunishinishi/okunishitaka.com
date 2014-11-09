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
        .controller('AdminBlogCtrl', function ($scope, blogListDatasource) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogOneDatasource, blogListDatasource, markdownRenderService) {
            ap.copy({
                save: function (blog) {
                    blogOneDatasource.data = blog;
                    blogOneDatasource.save(function (err, data) {
                        blogOneDatasource.clear();
                        blogListDatasource.reload();
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
        .controller('AdminBlogListCtrl', function ($scope, blogOneDatasource, blogListDatasource, textSummarizeLogic,
                                                   toastMessageService,
                                                   confirmMessageService) {
            var l = $scope.locale;
            ap.copy({
                edit: function (blog) {
                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load();
                },
                destroy: function (blog) {
                    //var sure = confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                    //if (!sure) {
                    //    return;
                    //}

                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load(function () {
                        blogOneDatasource.destroy(function (err) {
                            if (!err) {
                                var msg = l.pages.admin.DESTROY_BLOG_DONE;
                                toastMessageService.showInfoMessage(msg);
                                blogListDatasource.reload();
                            }
                        });
                    });
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