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
                    condition: {
                        _sort: '_at',
                        _reverse: true
                    }
                }),
                destroying: new BlogDestroyingDatasource({})
            }
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
        .controller('AdminBlogCtrl', function ($scope, datasources) {
            var editing = datasources.editing;
            ap.copy({
                add: function () {
                    editing.init({
                        data: {}
                    });
                }
            }, $scope);
        })
        .controller('AdminBlogEditCtrl', function ($scope,
                                                   datasources,
                                                   messenger) {
            var editing = datasources.editing,
                listing = datasources.listing;

            function close(callback) {
                editing.clear();
                (callback || ap.doNothing)(null);
            }

            ap.copy({
                editing: editing,
                save: function (blog) {
                    async.series([
                        editing.save.bind(editing),
                        listing.load.bind(listing),
                        close,
                        messenger.blogSaveDone.bind(messenger)
                    ]);
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
            var listing = datasources.listing,
                destroying = datasources.destroying;

            ap.copy({
                ellipsisLength: 32,
                listing: listing,
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

                    destroying.init({id: blog._id});
                    async.series([
                        destroying.load.bind(destroying),
                        destroying.destroy.bind(destroying),
                        messenger.blogDestroyDone.bind(messenger),
                        listing.load.bind(listing)
                    ]);
                }
            }, $scope);

            listing.load();
        });

})(angular, apeman);