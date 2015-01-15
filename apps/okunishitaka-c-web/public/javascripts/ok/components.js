/**
 * @ngdoc module
 * @module ok.components
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.components', [
            'ok.services',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc object
 * @name BlogList
 * @description Blog list
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.components')
        .factory('BlogList', function defineBlogList($q,
                                                     BlogEntity,
                                                     blogApiService,
                                                     blogTagApiService,
                                                     objectUtil) {
            var copy = objectUtil.copy.bind(objectUtil);

            function BlogList(config) {
                var s = this;
                copy(config || {}, s);
            }

            BlogList.prototype = {
                data: [],
                hasMore: false,
                condition: {
                    _sort: '_at',
                    _reverse: true,
                    _limit: 100,
                    _skip: 0
                },
                fetch: function () {
                    var s = this,
                        deferred = $q.defer();

                    function apiRejected(err) {
                        deferred.reject(err);
                    }

                    blogApiService.list(s.condition)
                        .then(function resolved(data) {
                            return data.map(BlogEntity.new);
                        }, apiRejected)
                        .then(function (blogs) {
                            s.data = s.data.concat(blogs);
                            s.hasMore = blogs.length >= s.condition._limit;
                            s.condition._skip += blogs.length;
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
                            var hash = s.blogTagHash || {};
                            blogTags.forEach(function (tag) {
                                var blogId = tag.blog_id;
                                hash[blogId] = hash[blogId] || [];
                                var isNew = hash[blogId].indexOf(tag) === -1;
                                if (isNew) {
                                    hash[blogId].push(tag);
                                }
                            });
                            s.blogTagHash = hash;
                            return hash;
                        }, apiRejected)
                        .then(function (hash) {
                            s.data.forEach(function (blog) {
                                var tags = hash[blog._id] || [];
                                blog.tag_texts = tags.map(function (tag) {
                                    return tag.tag_text;
                                });
                            });
                            deferred.resolve({
                                data: s.data,
                                hasMore: s.hasMore
                            });
                        });
                    return deferred.promise;
                }
            };

            return BlogList;
        });
})(angular);
