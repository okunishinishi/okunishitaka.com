/**
 * ok entities module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.entities', [
            
        ]);
})(angular);

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
/**
 * Abstract Entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('Entity', function () {
            function Entity() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Initialize a model.
             * @param {object} data - Entity data.
             */
            Entity.prototype.init = function (data) {
                var s = this;
                ap.copy(data || {}, s);
            }

            return Entity;
        })
})(angular, apeman);
/**
 * Setting entity.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('SettingEntity', function (Entity) {
            function SettingEntity() {
                var s = this;
                s.init.apply(s, arguments);
            }

            SettingEntity.prototype = new Entity({});

            return SettingEntity;
        })
})(angular, apeman);
