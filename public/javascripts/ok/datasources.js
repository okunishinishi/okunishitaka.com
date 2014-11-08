/**
 * ok datasources module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.datasources', [
            'ok.constants',
            'ok.entities',
            'ok.utils'
        ]);
})(angular);

/**
 * Data source for list.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListDatasource', function (Datasource) {

            return Datasource.define(
                /** @lends BlogListDatasource.prototype */
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
            };


            /**
             * Define a data source constructor.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            Datasource.define = function (properties) {
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Datasource(properties);

                return Defined;
            };

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
            };

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
                },
                new Datasource({})
            );

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
/**
 * Data source for list.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileListDatasource', function (Datasource) {

            return Datasource.define(
                /** @lends ProfileListDatasource.prototype */
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
/**
 * Data source for list.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListDatasource', function (Datasource) {

            return Datasource.define(
                /** @lends WorkListDatasource.prototype */
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
