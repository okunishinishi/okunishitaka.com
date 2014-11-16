/**
 * @ngdoc object
 * @name ViewingDatasource
 * @description Data source for viewing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ViewingDatasource', function (Datasource) {

            /**
             * @agutments Datasource
             * @constructor ViewingDatasource
             */
            function ViewingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            ViewingDatasource.define = function (properties) {
                return Datasource.define(properties, ViewingDatasource);
            };

            ViewingDatasource.prototype = ap.copy(
                /** @lends ViewingDatasource.prototype */
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
                     * Parse data.
                     * @param {object} data - Fethed data.
                     * @returns {*} - Parsed data.
                     */
                    _parseData: function (data) {
                        return data;
                    },
                    _setFetchedData: function (data) {
                        var s = this;
                        s.data = s._parseData(data);
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    _fetch: function (callback) {
                        var s = this,
                            id = s.id;
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s._oneRequest(id, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s._setFetchedData(data);
                            }
                            callback(err);
                        });
                    },
                    /**
                     * Discard fethced data.
                     * @private
                     */
                    _discard: function () {
                        var s = this;
                        s.init({});
                    },
                    init: function () {
                        var s = this;
                        s.data = null;
                        Datasource.prototype.init.apply(s, arguments);
                        return s;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s._discard();
                        s._fetch(callback);
                        return s;
                    }
                },
                new Datasource({})
            );

            return ViewingDatasource;
        });
})(angular, apeman);