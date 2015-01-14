/**
 * @ngdoc module
 * @module ok.services
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'ap.services',
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc Service
 * @name adminBlogApiService
 * @description AdminBlog api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogApiService', function AdminBlogApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_GET_WITH_ID, {_id: _id});
                return apiService.get(url);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Update a resource.
             * @param {string} _id - Resource id.
             * @param {object} data - Data to update.
             * @returns {Promise} - Deferred promise.
             */
            s.update = function update(_id, data) {
                    var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_PUT_WITH_ID, {_id: _id});
                    return apiService.put(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name adminBlogTagApiService
 * @description AdminBlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('adminBlogTagApiService', function AdminBlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_POST, data);
                return apiService.post(url, data);
            };

            /**
             * Destroy a resource.
             * @param {string} _id - Resource id.
             * @param {data?} data - Resource data.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(_id, data) {
                var url = formatUrl(apiUrlConstant.ADMIN_API_BLOG_TAG_DELETE_WITH_ID, {
                    _id: _id
                });
                return apiService.delete(url, data);
            };

        });
})(angular);
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
/**
 * @ngdoc Service
 * @name blogApiService
 * @description Blog api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_BLOG_GET, params);
                return apiService.get(url, params);
            };

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.API_BLOG_GET_WITH_ID, {_id: _id});
                return apiService.get(url);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name blogTagApiService
 * @description BlogTag api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogTagApiService', function BlogTagApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_BLOG_TAG_GET, params);
                return apiService.get(url, params);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name profileApiService
 * @description Profile api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * File a resource.
             * @param {string} _id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(_id) {
                var url = formatUrl(apiUrlConstant.API_PROFILE_GET, {_id: _id});
                return apiService.get(url);
            };

        });
})(angular);
/**
 * @ngdoc Service
 * @name workApiService
 * @description Work api service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService);

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = formatUrl(apiUrlConstant.API_WORK_GET, params);
                return apiService.get(url, params);
            };

        });
})(angular);
/**
 * @ngdoc object
 * @name blogSaveService
 * @description Blog save service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogSaveService', function BlogSaveService($q,
                                                             adminBlogApiService,
                                                             adminBlogTagApiService,
                                                             BlogEntity,
                                                             BlogTagEntity) {
            var s = this;


            function _saveBlog(blog) {
                var _id = blog && blog._id;
                if (_id) {
                    return adminBlogApiService.update(_id, blog);
                } else {
                    return adminBlogApiService.create(blog);
                }
            }


            s.save = function (blog) {
                var deferred = $q.defer();

                function rejected(err) {
                    deferred.reject(err);
                }

                var saved;
                _saveBlog(blog)
                    .then(function (data) {
                        return BlogEntity.new(data.data);
                    }, rejected)
                    .then(function (blog) {
                        saved = blog;
                        return adminBlogTagApiService.list({
                            blog_id: saved._id
                        });
                    })
                    .then(function (data) {
                        return data.map(BlogTagEntity.new);
                    }, rejected)
                    .then(function () {

                    });
                return deferred.promise;
            };
        });

})(angular);
/**
 * @ngdoc object
 * @name codeConvertService
 * @description Code convert service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('codeConvertService', function CodeConvertService(codeConstant) {
            var s = this;
            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;

            /**
             * Unexpected error code.
             * @type {number}
             */
            s.UNEXPECTED_ERROR = appErrorCodes.UNEXPECTED_ERROR;

            /**
             * Get error code for http status
             * @param {number} statusCode - HTTP status code.
             */
            s.errorCodeWithHttpStatus = function (statusCode) {
                statusCode = Number(statusCode);
                var keys = Object.keys(appErrorCodes);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var hit = httpStatusCodes[key] === statusCode;
                    if (hit) {
                        return appErrorCodes[key];
                    }
                }
                return null;
            }

        });

})(angular);
/**
 * @ngdoc object
 * @name errorHandleService
 * @description Error handle service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('errorHandleService', function ErrorHandleService(l,
                                                                   codeConstant,
                                                                   toastMessageService,
                                                                   $rootScope) {
            var s = this,
                appErrorCodes = codeConstant.appErrorCodes;

            /**
             * Show validation error.
             * @param {object[]} data - Validation error data.
             * @param {object} scope - Scope to evaluate message.
             * @private
             */
            s._showValidationError = function (data, scope) {

                scope.validationErrors = [].concat(data || []).map(function (data) {
                    if (data.messageKey) {
                        var message = l.errors[data.messageKey];
                        data.message = (message || data.message).replace(/\{key\}/g, data.key);
                    }
                    return data;
                });
            };

            /**
             * Handle error.
             * @param {object} err - Error to handle.
             * @param {object} [scope=$rootScope] - Scope to evaluate message.
             */
            s.handleError = function (err, scope) {
                scope = scope || $rootScope;
                var messages = [].concat(err.message || []);
                switch (err.code) {
                    case appErrorCodes.VALIDATION_ERROR:
                        s._showValidationError(err.data, scope);
                        break;
                    case appErrorCodes.CONFLICT_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONFLICT);
                        break;
                    case appErrorCodes.CONNECTION_ERROR:
                        toastMessageService.showErrorMessage(l.errors.CONNECTION);
                        break;
                    case appErrorCodes.NOT_FOUND_ERROR:
                        toastMessageService.showErrorMessage(l.errors.NOT_FOUND_ERROR);
                        break;
                    case appErrorCodes.SERVER_ERROR:
                    case appErrorCodes.UNEXPECTED_ERROR:
                    default:
                        messages.forEach(function (message) {
                            console.error(message);
                        });
                        toastMessageService.showErrorMessage(l.errors.UNEXPECTED);
                }
            };

            /**
             * Clear errors in scope.
             * @param scope
             */
            s.clearErrors = function (scope) {
                scope.validationErrors = {};
            };

        });

})(angular);
/**
 * @ngdoc object
 * @name eventEmitService
 * @description Event emit service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('eventEmitService', function EventEmitService(apEventEmitService) {
            var s = this;
            s.__proto__ = apEventEmitService;

        });

})(angular);
/**
 * @ngdoc object
 * @name langDetectService
 * @description Lang detect service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(apLangDetectService, appConstant) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0] || null;
            s.__proto__ = apLangDetectService;

            s.detectLang = function () {
                return apLangDetectService.detectLang(SUPPORTED_LANGS) || DEFAULT_LANG;
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name localStorageService
 * @description Local storage service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localStorageService', function LocalStorageService(apLocalStorageService) {
            var s = this;
            s.__proto__ = apLocalStorageService;

        });

})(angular);
/**
 * @ngdoc object
 * @name localeStoreService
 * @description Locale store service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeStoreService', function LocaleStoreService(apLocaleStoreService, localeConstant) {
            var s = this;
            s.__proto__ = apLocaleStoreService;
            s._locales = {};
            s.registerAll(localeConstant);

        });

})(angular);
/**
 * @ngdoc object
 * @name locationChangeService
 * @description Location change service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationChangeService', function LocationChangeService(apLocationChangeService) {
            var s = this;
            s.__proto__ = apLocationChangeService;

        });

})(angular);
/**
 * @ngdoc object
 * @name locationResolveService
 * @description Location resolve service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService(apLocationResolveService) {
            var s = this;
            s.__proto__ = apLocationResolveService;
        });

})(angular);
/**
 * @ngdoc object
 * @name locationSearchService
 * @description Location search service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationSearchService', function LocationSearchService(apLocationSearchService) {
            var s = this;
            s.__proto__ = apLocationSearchService;

        });

})(angular);
/**
 * @ngdoc object
 * @name markdownRenderService
 * @description Markdown render service.
 */
(function (ng, marked) {
    "use strict";

    ng
        .module('ok.services')
        .service('markdownRenderService', function MarkdownRenderService() {
            var s = this;

            /**
             * Render a markdown text.
             * @param {string} text - Text to render.
             * @returns {string} - Rendered text.
             */
            s.render = function (text) {
                return marked(text || '');
            };

        });

})(angular, marked);
/**
 * @ngdoc object
 * @name templateCacheService
 * @description Template cache service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService(apTemplateCacheService) {
            var s = this;
            s.__proto__ = apTemplateCacheService;
        });

})(angular);
/**
 * @ngdoc object
 * @name toastMessageService
 * @description Toast message service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('toastMessageService', function ToastMessageService($rootScope, $timeout) {
            var s = this;
            s._dismissTimer = null;
            s._dismissDuration = 2000;
            s._showMessage = function (message, type) {
                $rootScope.toasts = $rootScope.toasts || {};
                var queue = $rootScope.toasts[type] = $rootScope.toasts[type] || [];
                if (s._dismissTimer) {
                    $timeout.cancel(s._dismissTimer);
                    queue.shift();
                }
                queue.push(message);
                s._dismissTimer = $timeout(function () {
                    queue.shift();
                }, s._dismissDuration);
            };

            /**
             * Show info message.
             * @param {string} message - Message to show.
             */
            s.showInfoMessage = function (message) {
                s._showMessage(message, 'info');
            };
            /**
             * Show warn message.
             * @param {string} message - Message to show.
             */
            s.showWarnMessage = function (message) {
                s._showMessage(message, 'warn');
            };
            /**
             * Show error message.
             * @param {string} message - Message to show.
             */
            s.showErrorMessage = function (message) {
                s._showMessage(message, 'error');
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name urlFormatService
 * @description Url format service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService(apUrlFormatService) {
            var s = this;
            s.__proto__ = apUrlFormatService;
        });

})(angular);
