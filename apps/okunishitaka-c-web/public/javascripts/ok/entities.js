/**
 * @ngdoc module
 * @module ok.entities
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.entities', [
            'ok.constants',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc Object
 * @name BlogEntity
 * @description Blog entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogEntity', function defineBlogEntity(Entity) {

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

            /**
             * Get default values.
             * @returns {object}
             */
            BlogEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogEntity.new = function (data) {
                var entity = new BlogEntity(data);
                return entity;
            };

            return BlogEntity;

        });

})(angular);
/**
 * @ngdoc Object
 * @name BlogTagEntity
 * @description BlogTag entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('BlogTagEntity', function defineBlogTagEntity(Entity) {

            /**
             * @augments Entity
             * @constructor BlogTagEntity
             * @param {object} data - Entity data.
             */
            var BlogTagEntity = Entity.define(
                /** @lends BlogTagEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            BlogTagEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            BlogTagEntity.new = function (data) {
                var entity = new BlogTagEntity(data);
                return entity;
            };

            return BlogTagEntity;

        });

})(angular);
/**
 * @ngdoc object
 * @name Entity
 * @description Abstract Entity.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('Entity', function (objectUtil) {
            var copy = objectUtil.copy.bind(objectUtil);

            /** @lends Entity */
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
                copy(data || {}, s);
            };

            Entity.define = function (properties) {

                var Defined = function () {
                    var s = this;
                    s.init.apply(s, arguments);
                };

                Defined.prototype = new Entity(properties);

                /**
                 * Create a new entity instance.
                 * @param {object} data - Entity data.
                 * @returns {Defined}
                 */
                Defined.new = function (data) {
                    return new Defined(data);
                };

                return Defined;
            };

            return Entity;
        });
})(angular);
/**
 * @ngdoc Object
 * @name ProfileEntity
 * @description Profile entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('ProfileEntity', function defineProfileEntity(Entity) {

            /**
             * @augments Entity
             * @constructor ProfileEntity
             * @param {object} data - Entity data.
             */
            var ProfileEntity = Entity.define(
                /** @lends ProfileEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            ProfileEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            ProfileEntity.new = function (data) {
                var entity = new ProfileEntity(data);
                return entity;
            };

            return ProfileEntity;

        });

})(angular);
/**
 * @ngdoc Object
 * @name WorkEntity
 * @description Work entity.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.entities')
        .factory('WorkEntity', function defineWorkEntity(Entity) {

            /**
             * @augments Entity
             * @constructor WorkEntity
             * @param {object} data - Entity data.
             */
            var WorkEntity = Entity.define(
                /** @lends WorkEntity.prototype */
                {

                }
            );

            /**
             * Get default values.
             * @returns {object}
             */
            WorkEntity.defaults = function () {
                return {
                }
            };

            /**
             * Create a new entity.
             * @returns {object} - Created entity.
             */
            WorkEntity.new = function (data) {
                var entity = new WorkEntity(data);
                return entity;
            };

            return WorkEntity;

        });

})(angular);
