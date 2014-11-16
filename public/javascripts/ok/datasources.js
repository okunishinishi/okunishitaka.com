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
                    return s;
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
 * @ngdoc object
 * @name BlogDestroyingDatasource
 * @description Destoying data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogDestroyingDatasource', function (DestroyingDatasource, BlogEntity, blogApiService) {
            return DestroyingDatasource.define(
                /** @lends BlogDestroyingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _destroyRequest: function (id, callback) {
                        blogApiService.destroy(id, callback);
                    },
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name DestroyingDatasource
 * @description Data source for editing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('DestroyingDatasource', function (Datasource, ViewingDatasource) {

            /**
             * @agutments Datasource
             * @constructor DestroyingDatasource
             */
            function DestroyingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            DestroyingDatasource.define = function (properties) {
                return Datasource.define(properties, DestroyingDatasource);
            };

            DestroyingDatasource.prototype = ap.copy(
                /** @lends DestroyingDatasource.prototype */
                {
                    /**
                     * Send a request to destroy a resource.
                     * @param {string} id - Resource id to destroy.
                     * @param {function} callback - Callback when done.
                     * @private
                     */
                    _destroyRequest: function (id, callback) {
                        ap.throwNotImplmentedError();
                    },
                    /**
                     * Destroy data.
                     * @param {function} callback
                     */
                    destroy: function (callback) {
                        var s = this,
                            id = s.id;
                        callback = callback || ap.doNothing;
                        s._destroyRequest(id, callback);
                        return s;
                    },
                    clear: function () {
                        var s = this;
                        s._discard()
                        return s;
                    }
                },
                new ViewingDatasource({})
            );

            return DestroyingDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name BlogEditingDatasource
 * @description Editing data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogEditingDatasource', function (EditingDatasource, BlogEntity, blogApiService) {
            return EditingDatasource.define(
                /** @lends BlogEditingDatasource.prototype */
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
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name EditingDatasource
 * @description Data source for editing.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('EditingDatasource', function (Datasource, ViewingDatasource) {

            /**
             * @agutments Datasource
             * @constructor EditingDatasource
             */
            function EditingDatasource(properties) {
                var s = this;
                s.init.apply(s, arguments);
            }


            /**
             * Define an one data source.
             * @param {object} properties - Data source properties.
             * @returns {function} Defined constructor
             */
            EditingDatasource.define = function (properties) {
                return Datasource.define(properties, EditingDatasource);
            };

            EditingDatasource.prototype = ap.copy(
                /** @lends EditingDatasource.prototype */
                {
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
                     * Save data.
                     * @param {function} callback
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
                        return s;
                    },
                    clear: function () {
                        var s = this;
                        s._discard()
                        return s;
                    }
                },
                new ViewingDatasource({})
            );

            return EditingDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @name ProfileEditingDatasource
 * @description Editing data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileEditingDatasource', function (EditingDatasource, ProfileEntity, profileApiService) {
            return EditingDatasource.define(
                /** @lends ProfileEditingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        profileApiService.singleton(callback);
                    },
                    _updateRequest: function (data, callback) {
                        profileApiService.save(data, callback);
                    },
                }
            );
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @description List data source for blog.
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
                        return s;
                    },
                    /**
                     * Clear and fetch data.
                     * @param {function} callback
                     */
                    load: function (callback) {
                        var s = this;
                        s._discard();
                        s._fetch(callback);
                        return s;
                    },
                    /**
                     * Load next resources.
                     * @param {function} callback - Callback when done.
                     */
                    loadMore: function (callback) {
                        var s = this;
                        s._fetch(callback);
                        return s;
                    }
                },
                new Datasource({})
            );

            return ListDatasource;
        });
})(angular, apeman);
/**
 * @ngdoc object
 * @description List data source for work.
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
 * @ngdoc object
 * @name BlogViewingDatasource
 * @description View data source for blog.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('BlogViewingDatasource', function (ViewingDatasource, BlogEntity, blogApiService) {
            return ViewingDatasource.define(
                /** @lends BlogViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
                        blogApiService.one(id, callback);
                    },
                    _parseData: function (data) {
                        return BlogEntity.new(data);
                    }
                }
            );
        });

})(angular, apeman);
/**
 * @ngdoc object
 * @name ProfileViewingDatasource
 * @description View data source for profile.
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.datasources')
        .factory('ProfileViewingDatasource', function (ViewingDatasource, ProfileEntity, profileApiService) {
            return ViewingDatasource.define(
                /** @lends ProfileViewingDatasource.prototype */
                {
                    _oneRequest: function (id, callback) {
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
                        Datasource.prototype.init.apply(s, arguments);
                        s.data = null;
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
