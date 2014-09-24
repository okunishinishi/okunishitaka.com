/**
 * Abstract model.
 * @requires angualr
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.models')
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