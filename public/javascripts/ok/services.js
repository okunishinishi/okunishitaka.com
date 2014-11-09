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
            'ok.logics',
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
                    /**
                     * Send request.
                     * @param {object} config - Request configuration.
                     * @param {fnction} callback - Callback when done.
                     * @returns {*}
                     * @private
                     */
                    _request: function (config, callback) {
                        var s = this;

                        if (!config.url) {
                            // angular.js標準のエラーが分かりにくいのでここで明示的にthrowしている。
                            throw new Error('url is required.');
                        }
                        callback = callback || ap.doNothing;
                        return $http(config)
                            .success(function (data, status) {
                                callback(null, data);
                            })
                            .error(function (data, status) {
                                var err = s._newError(data, status);
                                callback(err, data);
                            });
                    },
                    /**
                     * Request with params.
                     * @param url
                     * @param method
                     * @param params
                     * @param callback
                     * @returns {*}
                     * @private
                     */
                    _paramsRequest: function (url, method, params, callback) {
                        var s = this;
                        var noParams = (!params) || (typeof(params) == 'function');
                        if (noParams) {
                            callback = callback || params;
                            return s._paramsRequest(url, method, {}, callback);
                        }
                        return s._request({
                            url: url,
                            method: method,
                            params: params
                        }, callback);
                    },
                    /**
                     * Request with data.
                     * @param url
                     * @param method
                     * @param data
                     * @param callback
                     * @private
                     */
                    _dataRequest: function (url, method, data, callback) {
                        var s = this;
                        var noData = (!data) || (typeof(data) == 'function');
                        if (noData) {
                            callback = callback || data;
                            return s._dataRequest(url, method, {}, callback);
                        }
                        return s._request({
                            url: url,
                            method: method,
                            data: data
                        }, callback);
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
                        return s._paramsRequest(url, 'GET', params, callback);
                    },
                    /**
                     * Post request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    post: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'POST', data, callback);
                    },
                    /**
                     * Put request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    put: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'PUT', data, callback);
                    },
                    /**
                     * Delete request.
                     * @param {string} url - URL to get.
                     * @param {object} [data] - Parameters.
                     * @param {function} callback - Callback when done.
                     */
                    delete: function (url, data, callback) {
                        var s = this;
                        return s._dataRequest(url, 'DELETE', data, callback);
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
        .service('blogApiService', function BlogApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.BLOGS_GET;
                return apiService.get(url, params, callback);
            }

            /**
             * File a resource.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.one = function one(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_GET_WITH_ID, {_id: id});
                return apiService.get(url, callback);
            };

            /**
             * Create a resource.
             * @param {object} data - Data to create.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.create = function create(data, callback) {
                var url = apiUrlConstant.BLOGS_POST;
                return apiService.post(url, data, callback);
            }

            /**
             * Update a resouce.
             * @param {string} id - Resource id.
             * @param {object} data - Data to update.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.update = function update(id, data, callback) {
                    var url = formatUrl(apiUrlConstant.BLOGS_PUT_WITH_ID, {_id: id});
                    return apiService.put(url, data, callback);
            }

            /**
             * Destroy a resouce.
             * @param {string} id - Resource id.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.destroy = function destroy(id, callback) {
                var url = formatUrl(apiUrlConstant.BLOGS_DELETE_WITH_ID, {_id: id});
                return apiService.delete(url, callback);
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
        .service('profileApiService', function ProfileApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

            /**
             * Get the singleton data.
             * @param {function} callback - Callback when done.
             */
            s.singleton = function singleton(callback) {
                var url = apiUrlConstant.PROFILES_GET;
                return apiService.get(url, callback);
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
        .service('settingApiService', function SettingApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

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
        .service('workApiService', function WorkApiService ($http, apiService, apiUrlConstant, jsonUrlConstant,  urlFormatLogic) {
            var s = this,
                formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic)

            /**
             * List resources.
             * @param {object} params - Query data.
             * @param {function} callback - Callback when done.
             * @returns {$http} - Http module.
             */
            s.list = function list(params, callback) {
                var url = apiUrlConstant.WORKS_GET;
                return apiService.get(url, params, callback);
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
 * Lang detect service.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.services')
        .service('langDetectService', function LangDetectService(appConstant, $location, multiLangUrlLogic) {
            var s = this,
                SUPPORTED_LANGS = appConstant.SUPPORTED_LANGS,
                DEFAULT_LANG = SUPPORTED_LANGS[0];

            s.SUPPORTED_LANGS = SUPPORTED_LANGS;
            s.DEFAULT_LANG = DEFAULT_LANG;
            s.detectLang = function () {
                var url = $location.href;
                return multiLangUrlLogic.langForUrl(url, SUPPORTED_LANGS) || DEFAULT_LANG;
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
            }

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
