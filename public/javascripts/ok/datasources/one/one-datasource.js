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
                    data: null,
                    loading: false,
                    /**
                     * Send a get request.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     */
                    _getRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a post request.
                     * @param {object} data - Resource data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _postRequest: function (data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a put request.
                     * @param {string} id - Data identifier.
                     * @param {object} data - Data to create.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _putRequest: function (id, data, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Send a delete request.
                     * @param {string} id - Data identifier.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _deleteRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Convert a data.
                     * @param data
                     * @returns {*}
                     */
                    _parse: function (data) {
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
                        s.loading = true;
                        s._getRequest(id, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.data = data;
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
                        if (id) {
                            s._putRequest(id, data, callback);
                        } else {
                            s._postRequest(data, callback);
                        }
                    },
                    destroy: function (callback) {
                        var s = this,
                            id = s.id;
                        s._deleteRequest(id, callback);
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