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
                                                   BlogEntity,
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
                adminBlogApiService.one(blogId)
                    .then(function (data) {
                        $scope.blog = BlogEntity.new(data);
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
            function _saveBlog(blog) {
                var _id = blog && blog._id;
                if (_id) {
                    return adminBlogApiService.update(_id, blog);
                } else {
                    return adminBlogApiService.create(blog);
                }
            }

            $scope.save = function (blog) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                _saveBlog(blog)
                    .then(function () {
                        $scope.close();
                        toastMessageService.showInfoMessage(l.toasts.SAVE_DONE);
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    })
            };

        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   l,
                                                   objectUtil,
                                                   arrayUtil,
                                                   errorHandleService,
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
                    eventEmitService.emit('admin.destroyBlog', b);
                }
            };

            load();
        });

})(angular);