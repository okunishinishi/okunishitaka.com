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
        .factory('messenger', function (global,
                                        toastMessageService,
                                        confirmMessageService) {
            var l = global.locale,
                showInfoMessage = toastMessageService.showInfoMessage.bind(toastMessageService);
            return {
                askSure: function () {
                    return confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                },
                blogDestroyDone: function (callback) {
                    showInfoMessage(l.pages.admin.DESTROY_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                },
                blogSaveDone: function (callback) {
                    showInfoMessage(l.pages.admin.SAVE_BLOG_DONE);
                    (callback || ap.doNothing)(null);
                }
            }
        })
        .controller('AdminBlogCtrl', function ($scope) {
            $scope.add = function () {
                $scope.$emit('addBlog');
            }
        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   $rootScope,
                                                   blogApiService,
                                                   messenger) {
            $scope.blog = null;
            $scope.close = function () {
                $scope.blog = null;
            }
            $scope.save = function () {
                var blog = $scope.blog,
                    id = blog && blog._id;

                var promise;
                if (id) {
                    promise = blogApiService.update(id, blog)
                } else {
                    console.log('create', blog);
                    promise = blogApiService.create(blog);
                }
                promise.then(function () {
                    $scope.close();
                });
            }
            $scope.add = function () {
                $scope.blog = {};
                console.log('addded', $scope.blog);
            }

            $scope.edit = function (id) {
                blogApiService.one(id)
                    .then(function resolved(data) {
                        $scope.blog = data;
                    })
                    .then(function rejected(err) {
                        //TODO
                    });
            }


            $rootScope.$on('editBlog', function (event, id) {
                $scope.edit(id);
            });
            $rootScope.$on('addBlog', function (event) {
                $scope.add();
            });
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   blogApiService,
                                                   messenger) {

            $scope.ellipsisLength = 32;
            $scope.blogs = [];
            $scope.edit = function (blog) {
                $scope.$emit('editBlog', blog._id);
            }

            blogApiService.list({
                _sort: '_at',
                _reverse: true
            }).then(function resolved(data) {
                $scope.blogs = $scope.blogs.concat(data);
            }, function rejected(err) {

            });

        });

})(angular, apeman);