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
                return Datasource.define(properties, OneDatasource);
            };

            OneDatasource.prototype = ap.copy(
                /** @lends OneDatasource.prototype */
                {
                    /**
                     * Data identifier
                     */
                    id: null,
                    data: null,
                    loading: false,
                    /**
                     * Send a request to get one.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     */
                    _oneRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a request to create a new resource.
                     * @param {object} data - Resource data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _createRequest: function (data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a request to update a exiting resource.
                     * @param {string} id - Data identifier.
                     * @param {object} data - Data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _updateRequest: function (id, data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a request to destory a exiting resource.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _destroyRequest: function (id, callback) {
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
                     * Clear fetched data.
                     */
                    clear: function () {
                        var s = this;
                        s.id = null;
                        s.data = null;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this,
                            id = s.id;
                        callback = callback || ap.doNothing;
                        s.loading = true;
                        s._oneRequest(id, function (err, data) {
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
                            id = s.id,
                            data = s.data || {};
                        callback = callback || ap.doNothing;
                        if (id) {
                            s._updateRequest(id, data, callback);
                        } else {
                            s._createRequest(data, callback);
                        }
                    },
                    destroy: function (callback) {
                        var s = this,
                            id = s.id;
                        callback = callback || ap.doNothing;
                        s._destroyRequest(id, callback);
                    },
                    /**
                     * Clear and fetch data.
                     * @param {function} callback
                     */
                    reload: function (callback) {
                        var s = this;
                        callback = callback || ap.doNothing;
                        s.clear();
                        s.load(callback);
                    }
                },
                new Datasource({})
            );

            return OneDatasource;
        });
})(angular, apeman);