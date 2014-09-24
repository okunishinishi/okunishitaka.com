/**
 * Blog model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.models')
        .factory('Blog', function (Model) {
            function Blog() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Blog.prototype = new Model;

            ap.copy(
                /** @lends Blog */
                {
                    BlogMap: function (data) {
                        return new Blog(data);
                    }
                }, Blog);

            return Blog;
        })
})(angular, apeman);