/**
 * Data source to list resouces.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ListDatasource', function (Datasource) {

            /**
             * @augments Datasource
             * @constructor ListDatasource
             */
            function ListDatasource() {
                var s = this;
                s.init.apply(s, arguments);
                s.clear();
            }

            /**
             * Define a list data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            ListDatasource.define = function (properties) {
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new ListDatasource(properties);

                return Defined;
            };

            ListDatasource.prototype = ap.copy(
                /** @lends ListDatasource.prototype */
                {
                    /** Limit count for fetching. */
                    limit: 20,
                    /** Skip count for fething. */
                    skip: null,
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
                     * Fetch data.
                     * @param {object} query - Query data.
                     * @param {function} callback - Callback when done.
                     */
                    _getRequest: function (query, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Parse data.
                     * @param {object} data - Data to parsed.
                     * @returns {object} - Parsed data.
                     */
                    _parse: function (data) {
                        return data;
                    },
                    /**
                     * Clear fecthed data and condition.
                     */
                    clear: function () {
                        var s = this;
                        s.data = [];
                        s.skip = 0;
                        s.condition = {};
                        s.hasMore = true;
                    },
                    /**
                     * Load data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this,
                            query = s._queryData();
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s._getRequest(query, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.hasMore = s.limit <= data.length;
                                s.data = s.data.concat(s._parse(data));
                                s.skip = s.data.length;
                            }
                            callback(err);
                        });
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

            return ListDatasource;
        });
})(angular, apeman);