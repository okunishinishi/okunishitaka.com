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
        .factory('blogEditor', function (blogOneDatasource, markdownRenderService) {
            return {
                getBlog: function () {
                    return blogOneDatasource.data;
                },
                setBlog: function (blog) {
                    if (blog.id) {
                        blogOneDatasource.id = blog.id;
                    }
                    blogOneDatasource.data = blog;
                },
                saveBlog: function (blog, callback) {
                    var s = this;
                    s.setBlog(blog);
                    blogOneDatasource.save(function (err, data) {
                        if (!err) {
                            blogOneDatasource.clear();
                        }
                        callback(err);
                    });
                },
                previewBlog: function (blog) {
                    if (!blog) {
                        return {};
                    }
                    return {
                        title: blog.title,
                        content: markdownRenderService.render(blog.content)
                    }
                },
                clear: function () {
                    blogOneDatasource.clear();
                }
            }
        })
        .controller('AdminBlogCtrl', function ($scope,
                                               blogListDatasource) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogEditor, blogListDatasource) {
            ap.copy({
                save: function (blog) {
                    blogEditor.saveBlog(blog, function (err, data) {
                        blogListDatasource.reload();
                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {
                    blogEditor.clear();
                }
            }, $scope);
            Object.defineProperties($scope, {
                blog: {
                    get: blogEditor.getBlog.bind(blogEditor),
                    set: blogEditor.setBlog.bind(blogEditor)
                },
                preview: {
                    get: function () {
                        return blogEditor.previewBlog(blogEditor.getBlog())
                    }
                }
            });
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   blogOneDatasource,
                                                   blogListDatasource,
                                                   textSummarizeLogic,
                                                   toastMessageService,
                                                   confirmMessageService) {
            var l = $scope.locale;
            ap.copy({
                edit: function (blog) {
                    blogOneDatasource.id = blog._id;
                    blogOneDatasource.load();
                },
                destroy: function (blog) {
                    var sure = confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                    if (!sure) {
                        return;
                    }

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