/**
 * @ngdoc Service
 * @name apiService
 */
(function (ng) {
    "use strict";


    ng
        .module('ok.services')
        .service('apiService', function ApiService($http, $q, AppApiError,
                                                   objectUtil, stringUtil, codeConvertService) {
            var s = this;
            objectUtil.copy(
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
                        return new AppApiError(code, data && (data.error || data.errors || data.err) || data);
                    },
                    /**
                     * Get x field values.
                     * @param headers
                     * @private
                     */
                    _xFields: function (headers) {
                        var prefix = /^x\-/;
                        var keys = Object.keys(headers),
                            result = {};
                        for (var i = 0, len = keys.length; i < len; i++) {
                            var key = keys[i];
                            if (!key.match(prefix)) {
                                continue;
                            }
                            var property = stringUtil.camelize(key.replace(prefix, ''));
                            result[property] = headers[key];
                        }
                        return result
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
                            .success(function (data, status, headers) {
                                var xFields = s._xFields(headers());
                                deferred.notify(xFields);
                                deferred.resolve(data);

                                s._sendNotification(xFields);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                deferred.reject(err);
                            });
                        return deferred.promise;
                    },
                    _sendNotification: function (data) {
                        var s = this;
                        var handlers = s._notificationHandler || [];
                        for (var i = 0; i < handlers.length; i++) {
                            var handler = handlers[i];
                            handler(data);
                        }
                    },
                    addNotificationHandler: function (handler) {
                        var s = this;
                        s._notificationHandler = s._notificationHandler || [];
                        s._notificationHandler.push(handler);
                    },
                    /**
                     * Request with params.
                     * @param {string} url - Url to request.
                     * @param {string} method - Method to request.
                     * @param {object} params - Parameter data.
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
                            data: data,
                            headers: {
                                'Content-Type': "application/json;"
                            }
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
                     * Head request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @returns {Promise} - Deferred promise.
                     */
                    head: function (url, params) {
                        var s = this;
                        return s._paramsRequest(url, 'HEAD', params);
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
})(angular);