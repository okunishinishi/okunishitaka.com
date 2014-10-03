/**
 * ok datasources module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.datasources', [
            'ok.constants',
            'ok.entities'
        ]);
})(angular);

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
                }
            }

            return Datasource;
        });
})(angular, apeman);
/**
 * Data source for list.
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
            }

            ListDatasource.prototype = ap.copy(
                /** @lends ListDatasource.prototype */
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
                     * @returns {{}}
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
                     * Fetch data.
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
                },
                new Datasource({})
            )

            return ListDatasource;
        });
})(angular, apeman);
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
