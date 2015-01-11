/**
 * ok services module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.services', [
            'apeman',
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

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
/**
 * Blog api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('blogApiService', function BlogApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = apiUrlConstant.API_BLOGS_GET;
                return apiService.get(url, params);
            }

            /**
             * File a resource.
             * @param {string} id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.one = function one(id) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @returns {Promise} - Deferred promise.
             */
            s.create = function create(data) {
                var url = apiUrlConstant.API_BLOGS_POST;
                return apiService.post(url, data);
            }

            /**
             * Update a resouce.
             * @param {string} id - Resource id.
             * @param {object} data - Data to update.
             * @returns {Promise} - Deferred promise.
             */
            s.update = function update(id, data) {
                    var url = formatUrl(apiUrlConstant.API_BLOGS_PUT_WITH_ID, {_id: id});
                    return apiService.put(url, data);
            }

            /**
             * Destroy a resouce.
             * @param {string} id - Resource id.
             * @returns {Promise} - Deferred promise.
             */
            s.destroy = function destroy(id) {
                var url = formatUrl(apiUrlConstant.API_BLOGS_DELETE_WITH_ID, {_id: id});
                return apiService.delete(url);
            }

        });
})(angular);
/**
 * Profile api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('profileApiService', function ProfileApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * Get the singleton data.
             * @returns {Promise} - Deferred promise.
             */
            s.singleton = function singleton() {
                var url = apiUrlConstant.API_PROFILES_GET;
                return apiService.get(url);
            }

        });
})(angular);
/**
 * Setting api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('settingApiService', function SettingApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

        });
})(angular);
/**
 * Work api service.
 * @requires angular
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('workApiService', function WorkApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatService) {
            var s = this,
                formatUrl = urlFormatService.formatUrl.bind(urlFormatService)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @returns {Promise} - Deferred promise.
             */
            s.list = function list(params) {
                var url = apiUrlConstant.API_WORKS_GET;
                return apiService.get(url, params);
            }

        });
})(angular);
/**
 * Browser detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('browserDetectService', function BrowserDetectService() {
            var s = this;

        });

})(angular, apeman);
/**
 * Code convert service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('codeConvertService', function CodeConvertService(codeConstant) {

            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;

            var s = this;
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
})(angular, apeman);
/**
 * Confirm message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('confirmMessageService', function ConfirmMessageService($window) {
            var s = this;
            s.confirm = function (msg) {
                return $window.confirm(msg);
            }
        });

})(angular, apeman);
/**
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(appConstant, $location, urlUtil) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0];

            s.SUPPORTED_LANGS = SUPPORTED_LANGS;
            s.DEFAULT_LANG = DEFAULT_LANG;
            /**
             * Get rang from url
             * @param {string} url - Url to work with.
             * @param {string[]} supportedLangs - Supported lang names.
             * @returns {string} - Detected lang.
             * @private
             */
            s._langWithURL = function (url, supportedLangs) {
                supportedLangs = [].concat(supportedLangs);
                var hostname = urlUtil.hostnameInUrl(url),
                    subdomain = hostname.split(/\./g).shift();
                for (var i = 0; i < supportedLangs.length; i++) {
                    var lang = supportedLangs[i];
                    if (lang === subdomain) {
                        return lang;
                    }
                }
                return null;
            };
            /**
             * Detect a lang.
             * @returns {string} - Detected lang.
             */
            s.detectLang = function () {
                var url = $location.href;
                return s._langWithURL(url, SUPPORTED_LANGS) || DEFAULT_LANG;
            };

        });

})(angular, apeman);
/**
 * Locale load service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('localeLoadService', function LocaleLoadService(apLocaleService, localeConstant) {
            var s = this;
            Object.keys(localeConstant).forEach(function (lang) {
                apLocaleService.register(lang, localeConstant[lang]);
            });

            /**
             * Get locale data for a lang.
             * @param {string} lang - Lang.
             * @returns {object} - Locale data.
             */
            s.localeForLang = function (lang) {
                return apLocaleService.localeForLang(lang);
            };
        });

})(angular, apeman);
/**
 * Location change service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationChangeService', function LocationChangeService($window, $anchorScroll, $location) {
            var s = this;
            /**
             * Change windows location.
             * @param {string} url - URL
             */
            s.changeTo = function (url) {
                $window.location.href = url;
            };

            /**
             *  Go to root page for current location.
             */
            s.changeToTopPage = function () {
                s.changeTo('/');
            };

            /**
             * Scroll to hash.
             * @param {string} hash - A url hash (dom element id).
             */
            s.scrollToHash = function (hash) {
                hash = hash.replace(/^#/, '');
                $location.hash(hash);
                $anchorScroll();
            }
        });

})(angular, apeman);
/**
 * Location resolve service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('locationResolveService', function LocationResolveService($window, urlUtil) {
            var s = this;

            s.baseUrl = urlUtil.baseUrlWithLocation($window.location);

            s.resolveUrl = function (url) {
                if (!url) {
                    return url;
                }
                if (url.match(/^\//)) {
                    return urlUtil.joinUrl(s.baseURL, url);
                }
                return urlUtil.joinUrl($window.location.href, url);
            }

        });

})(angular, apeman);
/**
 * Markdown render service.
 * @requires angular
 * @requires apeman
 * @requires marked
 */
(function (ng, ap, marked) {
    "use strict";

    ng
        .module('ok.services')
        .service('markdownRenderService', function MarkdownRenderService() {
            var s = this;

            /**
             * Render a markdonw text.
             * @param {string} text - Text to render.
             * @returns {string} - Rendered text.
             */
            s.render = function (text) {
                return marked(text || '');
            };
        });

})(angular, apeman, marked);
/**
 * Template cache service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('templateCacheService', function TemplateCacheService($templateCache) {
            var s = this;
            /**
             * Register a template.
             * @param {string} name - Template name.
             * @param {string} content - Template content.
             */
            s.register = function (name, content) {
                var isObj = typeof(arguments[0]) === 'object';
                if (isObj) {
                    var data = arguments[0];
                    Object.keys(data).forEach(function (key) {
                        s.register(key, data[key]);
                    });
                }
                $templateCache.put(name, content);
            };
        });

})(angular, apeman);
/**
 * Toast message service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
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

})(angular, apeman);
/**
 * Url format service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('urlFormatService', function UrlFormatService() {
            var s = this;
            /**
             * Format a url
             * @param {string} urlString - Url string.
             * @param {object} data - Data to format.
             */
            s.formatUrl = function (urlString, data) {
                var joiner = '/';
                return urlString
                    .split(joiner)
                    .map(function (pathname) {
                        var isVariable = pathname.match(/^:/);
                        if (isVariable) {
                            var key = pathname.replace(/^:/, '');
                            if (!data.hasOwnProperty(key)) {
                                throw new Errror('Missing key:', pathname);
                            }
                            return data[key];
                        }
                        return pathname;
                    })
                    .join(joiner);
            }
        });

})(angular, apeman);
