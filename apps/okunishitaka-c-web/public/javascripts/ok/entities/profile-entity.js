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