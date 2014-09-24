/**
 * Setting model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.models')
        .factory('Setting', function (Model) {
            function Setting() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Setting.prototype = new Model;

            return Setting;
        })
})(angular, apeman);