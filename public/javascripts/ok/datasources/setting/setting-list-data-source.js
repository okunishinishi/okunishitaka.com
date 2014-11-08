/**
 * Data source for list.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SettingListDatasource', function (Datasource) {

            return Datasource.define(
                /** @lends SettingListDatasource.prototype */
                {
                    /**
                     * Limit count for fetching.
                     */
                    limit: 20,
                    /**
                     * Skip count for fething.
                     */
                    skip: null,
                    /**
                     * Feched data.
                     */
                    data: null,
                    /**
                     * Has more data to fetch or not.
                     */
                    hasMore: true,
                    /**
                     * Create a query object.
                     * @returns {object}
                     */
                    createQuery: function () {
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
                     * Fetch data.
                     * @param query
                     * @param callback
                     */
                    fetch: function (query, callback) {
                        callback(null, null);
                    },
                    /**
                     * Convert data.
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
                            query = s.createQuery();
                        s.loading = true;
                        callback = callback || ap.doNothing;
                        s.fetch(query, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.hasMore = s.limit <= data.length;
                                s.data = s.data.concat(s.convert(data));
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
                }
            );
        });
})(angular, apeman);