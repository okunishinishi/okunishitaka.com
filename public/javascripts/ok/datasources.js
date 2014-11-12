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
            'ok.services',
            'ok.utils'
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
            };


            /**
             * Define a data source constructor.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            Datasource.define = function (properties, Prototype) {
                if (!Prototype) {
                    Prototype = Datasource;
                }
                function Defined() {
                    var s = this;
                    s.init.apply(s, arguments);
                }

                Defined.prototype = new Prototype(properties);

                return Defined;
            };

            return Datasource;
        });
})(angular, apeman);
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
                return Datasource.define(properties, ListDatasource);
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
                        s._listRequest(query, function (err, data) {
                            s.loading = false;
                            if (!err) {
                                s.hasMore = s.limit <= data.length;
                                s.data = s.data.concat(s._parseData(data));
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
 * List data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListDatasource', function (ListDatasource, WorkEntity, workApiService) {
            return ListDatasource.define(
                /** @lends WorkListDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        query._sort = '_at';
                        query._reverse = 'true';
                        workApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * List data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListingDatasource', function (ListingDatasource, BlogEntity, blogApiService) {
            return ListingDatasource.define(
                /** @lends BlogListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        blogApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(BlogEntity.new);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * Data source to list resouces.
 * @requires angular
 * @requires apeman
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
/**
 * List data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkListingDatasource', function (ListingDatasource, WorkEntity, workApiService) {
            return ListingDatasource.define(
                /** @lends WorkListingDatasource.prototype */
                {
                    _listRequest: function (query, callback) {
                        workApiService.list(query, callback);
                    },
                    _parseData: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * One data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogOneDatasource', function (OneDatasource, BlogEntity, blogApiService) {
            return OneDatasource.define(
                /** @lends BlogOneDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _createRequest: function (data, callback) {
                        blogApiService.create(data, callback);
                    },
                    _updateRequest: function (id, data, callback) {
                        blogApiService.update(id, data, callback);
                    },
                    _destroyRequest: function (id, callback) {
                        blogApiService.destroy(id, callback);
                    },
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
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
/**
 * Singleton data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileSingletonDatasource', function (SingletonDatasource, ProfileEntity, profileApiService) {
            return SingletonDatasource.define(
                /** @lends ProfileSingletonDatasource.prototype */
                {
                    _singletonRequest: function (callback) {
                        profileApiService.singleton(callback);
                    },
                    _parseData: function (data) {
                        return ProfileEntity.new(data);
                    }
                }
            );
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
