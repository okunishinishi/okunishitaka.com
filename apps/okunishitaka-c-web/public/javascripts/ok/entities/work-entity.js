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