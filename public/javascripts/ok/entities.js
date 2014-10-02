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

            /**
             * @augments Entity
             * @constructor BlogEntity
             * @param {object} data - Entity data.
             */
            var BlogEntity = Entity.define(
                /** @lends BlogEntity.prototype */
                {

                }
            );

            return BlogEntity;

        });

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
             * Initialize an entity.
             * @param {object} data - Entity data.
             */
            Entity.prototype.init = function (data) {
                var s = this;
                ap.copy(data || {}, s);
            }

            Entity.define = function (properties) {

                var Defined = function () {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Entity();

                /**
                 * Create a new entity instance.
                 * @param {object} data - Entity data.
                 * @returns {Defined}
                 */
                Defined.new = function (data) {
                    return new Defined(data);
                }

                return Defined;
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

            /**
             * @augments Entity
             * @constructor SettingEntity
             * @param {object} data - Entity data.
             */
            var SettingEntity = Entity.define(
                /** @lends SettingEntity.prototype */
                {

                }
            );

            return SettingEntity;

        });

})(angular, apeman);
