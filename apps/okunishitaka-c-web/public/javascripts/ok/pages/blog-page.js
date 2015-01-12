/**
 * @ngdoc module
 * @module ok.blogPage
 * @description Page script for blog.
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.blogPage', [
            'ok.page'
        ])
        .run(function setupRootScope($rootScope) {
            $rootScope.page = 'blog';
        })
        .factory('blogList', function (BlogList) {
            return new BlogList({
                condition: {
                    _sort: '_at',
                    _reverse: true,
                    _limit: 3,
                    _skip: 0
                }
            });
        })
        .controller('BlogCtrl', function defineBlogCtrl($scope) {

        })
        .controller('BlogDetailCtrl', function ($scope,
                                                blogApiService,
                                                BlogEntity,
                                                errorHandleService,
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
                blogApiService.one(blogId)
                    .then(function (data) {
                        $scope.blog = BlogEntity.new(data);
                    }, apiRejected)
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            eventEmitService.on('blog.detailBlog', function (ev, blog) {
                var _id = blog && blog._id;
                load(_id);
            });

            var blogId = locationSearchService.get('blog_id');
            load(blogId);

            $scope.$watch(function () {
                return locationSearchService.get();
            }, function (search) {
                var blogId = search['blog_id'],
                    changed = $scope.blogId !== blogId;
                if (changed) {
                    load(blogId);
                }
            });
        })
        .controller('BlogListCtrl', function ($scope,
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

            $scope.detail = function (b) {
                eventEmitService.emit('blog.detailBlog', b);
            };

            load();

        });

})(angular);