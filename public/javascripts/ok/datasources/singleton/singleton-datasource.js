/**
 * Data source for one.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SingletonDatasource', function (Datasource) {

            /**
             * @agutments Datasource
             * @constructor SingletonDatasource
             */
            function SingletonDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            SingletonDatasource.define = function (properties) {
                return Datasource.define(properties, SingletonDatasource);
            };

            SingletonDatasource.prototype = ap.copy(
                /** @lends SingletonDatasource.prototype */
                {
                    /**
                     * Data identifier
                     */
                    data: null,
                    loading: false,
                    /**
                     * Send a request to get the resource.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     */
                    _singletonRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a request to save resource.
                     * @param {object} data - Resource data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _saveRequest: function (data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Parse data.
                     * @param {object} data - Fethed data.
                     * @returns {*} - Parsed data.
                     */
                    _parseData: function (data) {
                        return data;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s.loading = true;
                        s._singletonRequest(function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.data = s._parseData(data);
                            }
                            callback(err);
                        });
                    },
                    /**
                     * Save data.
                     * @param callback
                     */
                    save: function (callback) {
                        var s = this,
                            data = s.data || {};
                        s._saveRequest(data, callback);
                    }
                },
                new Datasource({})
            );

            return SingletonDatasource;
        });
})(angular, apeman);