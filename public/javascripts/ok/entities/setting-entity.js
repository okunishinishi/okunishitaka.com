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