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

            function _excluded(array) {
                return function (value) {
                    return array.indexOf(value) === -1;
                }
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
                        var existing = blogTags.map(function (tag) {
                                return tag.tag_text;
                            }),
                            saving = s._filterTagTexts(blog.tag_texts, _excluded(existing)),
                            destroying = s._filterTagTexts(existing, _excluded(saving));
                        //TODO
                    });
                return deferred.promise;
            };
        });

})(angular);