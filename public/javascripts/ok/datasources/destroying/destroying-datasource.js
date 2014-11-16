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