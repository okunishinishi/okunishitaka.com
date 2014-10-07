/**
 * Abstract api service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";


    ng
        .module('ok.services')
        .service('apiService', function ApiService($http, errorCodeLogic, AppApiError) {
            var s = this;
            ap.copy(
                /**
                 * @lends apiService
                 */
                {
                    _newError: function (data, status) {
                        var s = this;
                        var code = errorCodeLogic.errorCodeWithHttpStatus(status);
                        if (code === null) {
                            code = errorCodeLogic.UNEXPECTED_ERROR;
                        }
                        return new AppApiError(code);
                    },
                    _request: function (url, method, params, callback) {
                        var s = this;

                        var noParams = (!params) || (typeof(params) == 'function');
                        if (noParams) {
                            return s._request(url, method, {}, callback);
                        }

                        if (!url) {
                            // angular.js標準のエラーが分かりにくいのでここで明示的にthrowしている。
                            throw new Error('url is required.');
                        }
                        return $http({
                            url:url,
                            method:method,
                            params:params
                        })
                            .success(function (data, status) {
                                callback(null, data);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                callback(err, data);
                            });
                    },
                    /**
                     * Get request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @param {function} callback - Callback when done.
                     * @returns {*}
                     */
                    get: function (url, params, callback) {
                        var s = this;
                        return s._request(url, 'GET', params, callback);
                    },
                    /**
                     * Post request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    post: function (url, params, callback) {
                        var s = this;
                        return s._request(url, 'POST', params, callback);
                    },
                    /**
                     * Put request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    put: function (url, params, callback) {
                        var s = this;
                        return s._request(url, 'PUT', params, callback);
                    },
                    /**
                     * Delete request.
                     * @param {string} url - URL to get.
                     * @param {object} [params] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    delete: function (url, params, callback) {
                        var s = this;
                        return s._request(url, 'DELETE', params, callback);
                    }
                },
                s
            );
        }
    );
})(angular, apeman);