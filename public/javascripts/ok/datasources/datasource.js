/**
 * Abstract data source.
 * @requires angular
 * @retuires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('Datasource', function () {
            /**
             * @abstract
             * @constructor Datasource
             */
            function Datasource() {
                var s = this;
                s.init.apply(s, arguments);
            }

            Datasource.prototype = {
                /**
                 * Inialize a data source.
                 */
                init: function (properties) {
                    var s = this;
                    ap.copy(properties || {}, s);
                    return s;
                }
            };


            /**
             * Define a data source constructor.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            Datasource.define = function (properties, Prototype) {
                if (!Prototype) {
                    Prototype = Datasource;
                }
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Prototype(properties);

                return Defined;
            };

            return Datasource;
        });
})(angular, apeman);