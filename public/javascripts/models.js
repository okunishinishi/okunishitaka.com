/**
 * Models.
 * @requires angular
 */

(function (ng) {
    "use strict";

    ng
        .module('okModels', [

        ]);
})(angular);
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
/**
 * Abstract model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('okModels')
        .factory('Model', function () {
            function Model() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Initialize a model.
             * @param {object} data - Model data.
             */
            Model.prototype.init = function (data) {
                var s = this;
                ap.copy(data || {}, s);
            }

            return Model;
        })
})(angular, apeman);
/**
 * Setting model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('okModels')
        .factory('Setting', function (Model) {
            function Setting() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Setting.prototype = new Model;

            return Setting;
        })
})(angular, apeman);
