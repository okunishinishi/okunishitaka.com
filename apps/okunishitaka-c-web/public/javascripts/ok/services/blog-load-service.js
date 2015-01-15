/**
 * @ngdoc object
 * @name blogLoadService
 * @description Blog load service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogLoadService', function BlogLoadService($q,
                                                             BlogEntity,
                                                             BlogTagEntity,
                                                             blogApiService,
                                                             blogTagApiService) {
            var s = this;

            s.load = function (_id) {
                var deferred = $q.defer();

                function apiRejected(err) {
                    deferred.reject(err);
                }

                var result;
                blogApiService.one(_id)
                    .then(function (data) {
                        return BlogEntity.new(data);
                    }, apiRejected)
                    .then(function (blog) {
                        result = blog;
                        return blogTagApiService.list({
                            blog_id: result._id
                        });
                    })
                    .then(function (data) {
                        return data.map(BlogTagEntity.new);
                    }, apiRejected)
                    .then(function (blogTags) {
                        blogTags.forEach(function () {
                            result.tag_texts = blogTags.map(function (tag) {
                                return tag.tag_text;
                            });
                        });
                        deferred.resolve(result);
                    });
                return deferred.promise;
            };

            return s;
        });

})(angular);