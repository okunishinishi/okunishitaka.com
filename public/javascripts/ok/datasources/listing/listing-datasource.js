/**
 * @ngdoc object
 * @name ListingDatasource
 * @description Data source to list resouces.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ListingDatasource', function (Datasource) {

            /**
             * @augments Datasource
             * @constructor ListDatasource
             */
            function ListDatasource() {
                var s = this;
                s.init.apply(s, arguments);
            }

            /**
             * Define a list data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            ListDatasource.define = function (properties) {
                return Datasource.define(properties, ListDatasource);
            };

            ListDatasource.prototype = ap.copy(
                /** @lends ListDatasource.prototype */
                {
                    /** Limit count for fetching. */
                    limit: 20,
                    /** Skip count for fething. */
                    skip: 0,
                    /** Feched data. */
                    data: null,
                    /** Has more data to fetch or not. */
                    hasMore: true,
                    /** Search condition. */
                    condition: {},
                    /** Is loading or not. */
                    loading: false,
                    /**
                     * Get query.
                     * @returns {object}
                     * @private
                     */
                    _queryData: function () {
                        var s = this,
                            query = {};
                        ap.copy({
                            _limit: s.limit,
                            _skip: s.skip
                        }, query);
                        ap.copy(s.condition, query);
                        return query;
                    },
                    /**
                     * Send a request to get list.
                     * @param {object} query - Query data.
                     * @param {function} callback - Callback when done.
                     */
                    _listRequest: function (query, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Parse data.
                     * @param {object} data - Data to parsed.
                     * @returns {object} - Parsed data.
                     */
                    _parseData: function (data) {
                        return data;
                    },
                    _addFetchedData: function (data) {
                        var s = this;
                        s.hasMore = s.limit <= data.length;
                        s.data = s.data.concat(s._parseData(data));
                        s.skip = s.data.length;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    _fetch: function (callback) {
                        var s = this,
                            query = s._queryData();
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s._listRequest(query, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s._addFetchedData(data);
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
                        Datasource.prototype.init.apply(s, arguments);
                        s.hasMore = true;
                        s.data = [];
                        s.skip = 0;
                    },
                    /**
                     * Clear and fetch data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s._discard();
                        s._fetch(callback);
                    },
                    /**
                     * Load next resources.
                     * @param {function} callback - Callback when done.
                     */
                    loadMore: function (callback) {
                        var s = this;
                        s._fetch(callback);
                    }
                },
                new Datasource({})
            );

            return ListDatasource;
        });
})(angular, apeman);