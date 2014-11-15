/**
 * Blog render service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogRenderService', function BlogRenderService(markdownRenderService, BlogEntity) {
            var s = this;
            /**
             * Render a blog.
             * @param {object} blog - Blog to render.
             * @returns {object} - Rendered blog.
             */
            s.renderBlog = function (blog) {
                if (!blog) {
                    return {};
                }
                var rendered = new BlogEntity(blog);
                rendered.html = markdownRenderService.render(blog.content);
                return rendered;
            }
        });

})(angular, apeman);