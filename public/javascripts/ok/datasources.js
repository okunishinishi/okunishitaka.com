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
 * List data source for blog.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogListDatasource', function (ListDatasource, BlogEntity, blogApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    blogApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(BlogEntity.new);
                }
            });
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
/**
 * List data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileListDatasource', function (ListDatasource, ProfileEntity, profileApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    profileApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(ProfileEntity.new);
                }
            });
        });

})(angular, apeman);
/**
 * List data source for setting.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SettingListDatasource', function (ListDatasource, SettingEntity, settingApiService) {
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    query._sort = '_at';
                    query._reverse = 'true';
                    settingApiService.list(query, callback);
                },
                _parse: function (data) {
                    return data.map(SettingEntity.new);
                }
            });
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
            return ListDatasource.define({
                _getRequest: function (query, callback) {
                    workApiService.singleton(callback);
                },
                _parse: function (data) {
                    return data.map(WorkEntity.new);
                }
            });
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
                    _getRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        blogApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        blogApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        blogApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(BlogEntity.new);
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
/**
 * One data source for profile.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileOneDatasource', function (OneDatasource, ProfileEntity, profileApiService) {
            return OneDatasource.define(
                /** @lends ProfileOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        profileApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        profileApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        profileApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        profileApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(ProfileEntity.new);
                    }
                }
            );
        });
});
/**
 * One data source for setting.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('SettingOneDatasource', function (OneDatasource, SettingEntity, settingApiService) {
            return OneDatasource.define(
                /** @lends SettingOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        settingApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        settingApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        settingApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        settingApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(SettingEntity.new);
                    }
                }
            );
        });
});
/**
 * One data source for work.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('WorkOneDatasource', function (OneDatasource, WorkEntity, workApiService) {
            return OneDatasource.define(
                /** @lends WorkOneDatasource.prototype */
                {
                    _getRequest: function (id, callback) {
                        workApiService.one(id, callback);
                    },
                    _postRequest: function (data, callback) {
                        workApiService.create(data, callback);
                    },
                    _putRequest: function (id, data, callback) {
                        workApiService.update(id, data, callback);
                    },
                    _deleteRequest: function (id, callback) {
                        workApiService.delete(id, callback);
                    },
                    _parse: function (data) {
                        return data.map(WorkEntity.new);
                    }
                }
            );
        });
});
