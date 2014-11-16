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
        .factory('datasources', function (BlogEditingDatasource,
                                          BlogListingDatasource,
                                          BlogDestroyingDatasource) {
            return {
                editing: new BlogEditingDatasource({}),
                listing: new BlogListingDatasource({
                    _sort: '_at',
                    _revert: true
                }),
                destroying: new BlogDestroyingDatasource({})
            }
        })
        .factory('messenger', function (global,
                                        toastMessageService,
                                        confirmMessageService) {
            var l = global.locale;
            return {
                askSure: function () {
                    return confirmMessageService.confirm(l.pages.admin.ASK_SURE);
                },
                showBlogDestoryDone: function () {
                    var msg = l.pages.admin.DESTROY_BLOG_DONE;
                    toastMessageService.showInfoMessage(msg);
                }
            }
        })
        .controller('AdminBlogCtrl', function ($scope) {
        })
        .controller('AdminBlogEditCtrl', function ($scope, datasources, blogRenderService) {
            function close() {
                datasources.editing.clear();
            }

            ap.copy({
                preview: function (blog) {
                    return blogRenderService.renderBlog(blog);
                },
                datasources: datasources,
                editing: datasources.editing,
                save: function (blog) {
                    datasources.editing.save(function (err, data) {
                        close();
                    });
                },
                cancel: function () {
                    close();
                },
                close: close
            }, $scope);
        })
        .controller('AdminBlogListCtrl', function ($scope,
                                                   datasources,
                                                   messenger) {
            ap.copy({
                contentEllipsisLength: 32,
                datasources: datasources,
                listing: datasources.listing,
                edit: function (blog) {
                    datasources.editing
                        .init({id: blog._id})
                        .load(function () {
                        });
                },
                destroy: function (blog) {
                    var sure = messenger.askSure();
                    if (!sure) {
                        return;
                    }

                    datasources.destroying
                        .init({id: blog._id})
                        .load(function () {
                            datasources.destroying
                                .destroy(function (err) {
                                    if (!err) {
                                        messenger.showBlogDestoryDone();
                                        datasources.listing.load();
                                    }
                                });
                        });
                }
            }, $scope);

            datasources.listing.load();
        });

})(angular, apeman);