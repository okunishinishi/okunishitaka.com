/**
 * @ngdoc object
 * @name blogSaveService
 * @description Blog save service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogSaveService', function BlogSaveService($q,
                                                             adminBlogApiService,
                                                             adminBlogTagApiService,
                                                             apArrayUtil,
                                                             BlogEntity,
                                                             BlogTagEntity) {
            var s = this;


            function _saveBlog(blog) {
                var _id = blog && blog._id;
                if (_id) {
                    return adminBlogApiService.update(_id, blog);
                } else {
                    return adminBlogApiService.create(blog);
                }
            }

            function _saveBlogTag(blog_id, tagText) {
                return adminBlogTagApiService.create({
                    blog_id: blog_id,
                    tag_text: tagText
                });
            }

            function destroyBlogTag(blogTag) {
                return adminBlogTagApiService.destroy(blogTag._id);
            }

            function _excluded(array) {
                return function (value) {
                    return array.indexOf(value) === -1;
                }
            }

            function _updateBlogTags(blogTags, blog) {
                var existing = blogTags.map(function (tag) {
                        return tag.tag_text;
                    }),
                    saving = s._filterTagTexts(blog.tag_texts, _excluded(existing)),
                    destroying = s._filterTagTexts(existing, _excluded(blog.tag_texts));

                var deferred = $q.defer(),
                    promise = deferred.promise;
                saving.forEach(function (saving) {
                    if (!saving) {
                        return;
                    }
                    promise = promise.then(function () {
                        return _saveBlogTag(blog._id, saving);
                    });
                });

                var blogTagsHash = apArrayUtil.toHashWithKey(blogTags, 'tag_text');
                destroying.forEach(function (destroying) {
                    var blogTag = blogTagsHash[destroying];
                    if (!blogTag) {
                        return;
                    }
                    promise = promise.then(function () {
                        return destroyBlogTag(blogTag);
                    });
                });
                deferred.resolve();
                return promise;
            }

            s._filterTagTexts = function (tag_texts, condition) {
                return tag_texts.map(function (tag_text) {
                    return String(tag_text).trim();
                }).filter(condition);
            };

            s.save = function (blog) {
                var deferred = $q.defer();

                function rejected(err) {
                    deferred.reject(err);
                }

                var saved;

                _saveBlog(blog)
                    .then(function (data) {
                        return BlogEntity.new(data.data);
                    }, rejected)
                    .then(function (blog) {
                        saved = blog;
                        return adminBlogTagApiService.list({
                            blog_id: saved._id
                        });
                    })
                    .then(function (data) {
                        return data.map(BlogTagEntity.new);
                    }, rejected)
                    .then(function (blogTags) {
                        return _updateBlogTags(blogTags, blog).then(function () {
                            deferred.resolve();
                        });
                    }, rejected);
                return deferred.promise;
            };
        });

})(angular);