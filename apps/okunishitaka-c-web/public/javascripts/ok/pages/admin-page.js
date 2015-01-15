/**
 * @ngdoc module
 * @module ok.adminPage
 * @description Page script for admin.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.adminPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'admin';
        })
        .factory('blogList', function (BlogList) {
            return new BlogList({
                condition: {
                    _sort: '_at',
                    _reverse: true,
                    _limit: 10,
                    _skip: 0
                }
            });
        })
        .controller('AdminCtrl', function defineAdminCtrl($scope) {

        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   adminBlogApiService,
                                                   blogLoadService,
                                                   BlogEntity,
                                                   blogSaveService,
                                                   errorHandleService,
                                                   toastMessageService,
                                                   l,
                                                   locationSearchService,
                                                   eventEmitService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }


            function load(blogId) {
                $scope.blogId = blogId;
                if (!blogId) {
                    return;
                }
                locationSearchService.update('blog_id', blogId);
                $scope.loading = true;
                blogLoadService.load(blogId)
                    .then(function (blog) {
                        $scope.blog = blog;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            eventEmitService.on('admin.editBlog', function (ev, blog) {
                var _id = blog && blog._id;
                load(_id);
            });


            $scope.close = function () {
                $scope.blogId = null;
                $scope.blog = null;
            };

            $scope.save = function (blog) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                blogSaveService.save(blog)
                    .then(function () {
                        $scope.close();
                        toastMessageService.showInfoMessage(l.toasts.SAVE_DONE);
                        eventEmitService.emit('blog.saveBlog.done');
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            };

        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   adminBlogApiService,
                                                   l,
                                                   objectUtil,
                                                   arrayUtil,
                                                   errorHandleService,
                                                   toastMessageService,
                                                   eventEmitService,
                                                   blogList) {
            function apiRejected(err) {
                errorHandleService.handleError(err);
            }

            $scope.CONTENT_MAX_LENGTH = 80;

            function load() {
                $scope.loading = true;
                blogList.fetch()
                    .then(function (result) {
                        $scope.blogs = result.data;
                        $scope.hasMore = result.hasMore;
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            function reload() {
                blogList.clear();
                load();
            }

            $scope.hasMore = false;
            $scope.loadMore = function () {
                load();
            };

            $scope.edit = function (b) {
                eventEmitService.emit('admin.editBlog', b);
            };
            $scope.destroy = function (b) {
                var sure = confirm(l.messages.SURE_TO_DESTROY);
                if (sure) {
                    $scope.loading = true;
                    adminBlogApiService.destroy(b._id)
                        .then(function () {
                            toastMessageService.showInfoMessage(l.toasts.DESTROY_DONE);
                            reload();
                        }, apiRejected)
                        .finally(function () {
                            $scope.loading = false;
                        });
                }
            };

            eventEmitService.on('blog.saveBlog.done', function () {
                reload();
            });


            load();
        });

})(angular);