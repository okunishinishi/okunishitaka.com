/**
 * Data source for editing.
 * @requires angular
 * @requires apeman
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
                    clear: function () {
                        var s = this;
                        s._discard()
                    }
                },
                new ViewingDatasource({})
            );

            return EditingDatasource;
        });
})(angular, apeman);