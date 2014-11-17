/**
 * Abstract api service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.services')
        .service('apiService', function ApiService($http, $q, AppApiError, codeConvertService) {
            var s = this;
            ap.copy(
                /**
                 * @lends apiService
                 */
                {
                    _newError: function (data, status) {
                        var s = this;
                        var code = codeConvertService.errorCodeWithHttpStatus(status);
                        if (code === null) {
                            code = codeConvertService.UNEXPECTED_ERROR;
                        }
                        return new AppApiError(code);
                    },
                    /**
                     * Send request.
                     * @param {object} config - Request configuration.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _request: function (config) {
                        var s = this;

                        if (!config.url) {
                            // angular.js標準のエラーが分かりにくいのでここで明示的にthrowしている。
                            throw new Error('url is required.');
                        }
                        var deferred = $q.defer();
                        $http(config)
                            .success(function (data, status) {
                                deferred.resolve(data);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                deferred.reject(err);
                            });
                        return deferred.promise;
                    },
                    /**
                     * Request with params.
                     * @param {string} url - Url to request.
                     * @param {string} method - Method to request.
                     * @param {object} params - Paremeter data.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _paramsRequest: function (url, method, params) {
                        var s = this;
                        return s._request({
                            url: url,
                            method: method,
                            params: params
                        });
                    },
                    /**
                     * Request with data.
                     * @param {string} url - Url to request.
                     * @param {string} method - Method to request.
                     * @param {object} data - Request data.
                     * @returns {Promise} - Deferred promise.
                     * @private
                     */
                    _dataRequest: function (url, method, data) {
                        var s = this;
                        return s._request({
                            url: url,
                            method: method,
                            data: data
                        });
                    },
                    /**
                     * Get request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    get: function (url, params) {
                        var s = this;
                        return s._paramsRequest(url, 'GET', params);
                    },
                    /**
                     * Post request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    post: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'POST', data);
                    },
                    /**
                     * Put request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    put: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'PUT', data);
                    },
                    /**
                     * Delete request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    delete: function (url, data) {
                        var s = this;
                        return s._dataRequest(url, 'DELETE', data);
                    }
                },
                s
            );
        }
    );
})(angular, apeman);