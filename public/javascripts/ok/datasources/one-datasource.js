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
            }


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
            };

            OneDatasource.prototype = ap.copy(
                /** @lends OneDatasource.prototype */
                {
                    /**
                     * Data identifier
                     */
                    id: null,
                    /**
                     * Clear fetched data.
                     */
                    clear: function () {
                        var s = this;
                        s.data = null;
                    },
                    /**
                     * Fech data.
                     * @param {string} id - Data identifier
                     * @param {function} callback - Callback when done.
                     */
                    fetch: function (id, callback) {
                        callback(null, null);
                    },
                    /**
                     * Convert a data.
                     * @param data
                     * @returns {*}
                     */
                    convert: function (data) {
                        return data;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this,
                            id = s.id;
                        s.loading = true;
                        s.fetch(id, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.data = data;
                            }
                            callback(err);
                        });
                    },
                    create: function (data, callback) {
                        callback(null, data);
                    },
                    update: function (id, data, callback) {
                        callback(null, data);
                    },
                    /**
                     * Save data.
                     * @param callback
                     */
                    save: function (callback) {
                        var s = this,
                            id = s.id,
                            data = s.data || {};
                        if (id) {
                            s.update(id, data, callback);
                        } else {
                            s.create(data, callback);
                        }
                    },
                    /**
                     * Clear and fetch data.
                     * @param {function} callback
                     */
                    reload: function (callback) {
                        var s = this;
                        s.clear();
                        s.load(callback);
                    }
                },
                new Datasource({})
            );

            return OneDatasource;
        });
})(angular, apeman);