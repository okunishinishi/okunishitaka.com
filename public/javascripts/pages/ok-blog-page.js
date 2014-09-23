/**
 * Page script for blog.
 * @requires angular
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('okBlogPage', [
            'okPage',
        ])
        .run(function ($rootScope) {

        })
        .factory('BlogList', function (blogApiService, Blog) {
            function BlogList(properties) {
                var s = this;
                ap.copy(properties || {}, s);
            }

            ap.copy(
                /** @lends BlogList */
                {
                    toModel: function (data) {
                        return new Blog(data);
                    }
                }, BlogList);

            BlogList.prototype = {
                data: [],
                limit: 10,
                skip: 0,
                hasMore: false,
                condition: {},
                query: function () {
                    var s = this,
                        query = {
                            _limit: s.limit,
                            _skip: s.skip
                        };
                    ap.copy(s.condition || {}, query);
                    return query;
                },
                clear: function () {
                    var s = this;
                    s.data = [];
                    s.skip = 0;
                    s.condition = {};
                },
                _fetchData: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    blogApiService.list(s.query)
                        .success(function (data, status) {
                            var models = data.map(BlogList.toModel);
                            callback(null, models);
                        })
                        .error(function () {
                            callback(new Error('Failed to fetch'));
                        });
                },
                load: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    s.skip = 0;
                    s._fetchData(function (err, data) {
                        if (!err) {
                            s.data = data;
                            s.hasMore = s.limit <= data.length;
                        }
                        callback(err);
                    });
                },
                loadMore: function (callback) {
                    var s = this;
                    callback = callback || ap.doNothing;
                    s.skip = s.data.length;
                    s._fetchData(function (err, data) {
                        if (!err) {
                            s.data = s.data.concat(data);
                            s.hasMore = data.length > 0;
                        }
                        callback(err);
                    });
                }
            }
            return BlogList;
        })
        .controller('BlogCtrl', function ($scope, BlogList) {

            var blogList = new BlogList();
            ap.copy({
                load: function () {
                    blogList.load(function (err) {

                    });
                },
                loadMore: function () {
                    blogList.loadMore(function () {

                    });
                },
                reload: function (callback) {
                    blogList.clear();
                    $scope.load(callback);
                }
            }, $scope);

            Object.defineProperties($scope, {
                hasMore: {
                    get: function () {
                        return blogList.hasMore;
                    }
                },
                blogs: {
                    get: function () {
                        return blogList.data;
                    }
                }
            });

            $scope.load();
        });

})(angular, apeman);