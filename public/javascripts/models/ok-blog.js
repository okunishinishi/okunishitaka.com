/**
 * Blog model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('okModels')
        .factory('Blog', function (Model) {
            function Blog() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Blog.prototype = new Model;

            return Blog;
        })
})(angular, apeman);