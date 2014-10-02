/**
 * Blog entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogEntity', function (Entity) {
            function BlogEntity() {
                var s = this;
                s.init.apply(s, arguments);
            }

            BlogEntity.prototype = new Entity({});

            return BlogEntity;
        })
})(angular, apeman);