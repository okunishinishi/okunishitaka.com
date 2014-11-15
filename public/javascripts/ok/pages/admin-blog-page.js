/**
 * @ngdoc module
 * @module ok.adminBlogPage
 * @description Page script for admin.
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
        .factory('blogEditingDatasource', function (BlogEditingDatasource) {
            return new BlogEditingDatasource({});
        })
        .controller('AdminBlogCtrl', function ($scope) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, blogEditingDatasource, blogRenderService) {
            ap.copy({
                preview: function (blog) {
                    return blogRenderService.renderBlog(blog);
                },
                editing: blogEditingDatasource,
                save: function (blog) {
                    blogEditingDatasource.save(function (err, data) {
                        $scope.close();
                    });
                },
                cancel: function () {
                    $scope.close();
                },
                close: function () {
                    blogEditingDatasource.clear();
                }
            }, $scope);
        })
        .factory('blogListingDatasource', function (BlogListingDatasource) {
            return new BlogListingDatasource({
                _sort: '_at',
                _revert: true
            });
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   blogEditingDatasource,
                                                   blogListingDatasource,
                                                   textSummarizeLogic,
                                                   toastMessageService,
                                                   confirmMessageService) {
            var l = $scope.locale;

            ap.copy({
                listing: blogListingDatasource,
                edit: function (blog) {
                    blogEditingDatasource
                        .init({id: blog._id})
                        .load(function () {
                        });
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
                                blogListingDatasource.load();
                            }
                        });
                    });
                },
                summarize: function (text) {
                    return textSummarizeLogic.summarize(text, 30);
                }
            }, $scope);

            blogListingDatasource.load();
        });

})(angular, apeman);