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