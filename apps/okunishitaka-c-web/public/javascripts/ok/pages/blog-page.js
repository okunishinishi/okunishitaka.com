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
        .controller('BlogCtrl', function defineBlogCtrl($scope) {

        })
        .controller('BlogListCtrl', function ($scope,
                                              objectUtil,
                                              arrayUtil,
                                              errorHandleService,
                                              BlogEntity,
                                              blogApiService,
                                              blogTagApiService) {

            function apiRejected(err) {
                errorHandleService.handleError(err);
            }

            $scope.blogTagHash = {};

            function load() {
                $scope.loading = true;
                blogApiService.list($scope.condition)
                    .then(function resolved(data) {
                        return data.map(BlogEntity.new);
                    }, apiRejected)
                    .then(function (blogs) {
                        $scope.blogs = $scope.blogs.concat(blogs);
                        $scope.hasMore = blogs.length >= $scope.condition._limit;
                        $scope.condition._skip += blogs.length;
                        return blogs;
                    })
                    .then(function (blogs) {
                        return blogTagApiService.list({
                            'blog_id[]': blogs.map(function (blog) {
                                return blog._id;
                            })
                        });
                    })
                    .then(function (blogTags) {
                        var hash = $scope.blogTagHash || {};
                        blogTags.forEach(function (tag) {
                            var blogId = tag.blog_id;
                            hash[blogId] = hash[blogId] || [];
                            var isNew = hash[blogId].indexOf(tag) === -1;
                            if (isNew) {
                                hash[blogId].push(tag);
                            }
                        });
                        $scope.blogTagHash = hash;
                        return hash;
                    }, apiRejected)
                    .then(function (hash) {
                        $scope.blogs.forEach(function (blog) {
                            var tags = hash[blog._id];
                            blog.tag_texts = tags.map(function (tag) {
                                return tag.tag_text;
                            });
                        });
                    })
                    .finally(function () {
                        $scope.loading = false;
                    });
            }

            $scope.condition = {
                _sort: '_at',
                _reverse: true,
                _limit: 3,
                _skip: 0
            };
            $scope.blogs = [];
            $scope.hasMore = false;
            $scope.loadMore = function () {
                load();
            };

            load();

        });

})(angular);