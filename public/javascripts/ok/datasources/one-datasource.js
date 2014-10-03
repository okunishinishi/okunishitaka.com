/**
 * Data source for one.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('OneDatasource', function (Datasource) {

            /**
             * @agutments Datasource
             * @constructor OneDatasource
             */
            function OneDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
                s.clear();
            };


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            OneDatasource.define = function (properties) {
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                    s.clear;
                }

                Defined.prototype = new OneDatasource(properties);

                return Defined;
            }

            OneDatasource.prototype = ap.copy(
                /** @lends OneDatasource.prototype */
                {
                    clear: function () {
                        var s = this;
                        s.data = null;
                    },
                    fetch: function (query, callback) {
                        callback(null, null);
                    },
                    convert: function (data) {
                        return data;
                    },
                    load: function (callback) {
                        var s = this;
                    }
                },
                new Datasource({})
            );

            return OneDatasource;
        });
})(angular, apeman);