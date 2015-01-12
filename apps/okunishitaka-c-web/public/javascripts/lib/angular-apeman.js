/**
 * @ngdoc module
 * @module ap
 */

(function (ng) {
    "use strict";
    ng
        .module('ap', [
            'ap.services',
            'ap.utils'
        ]);
})(angular);

/**
 * @ngdoc module
 * @module ap.services
 */

(function (ng) {
    "use strict";
    ng
        .module('ap.services', [
            'ap.utils'
        ]);
})(angular);

/**
 * @ngdoc object
 * @name apEventEmitService
 * @description Ap event emit service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apEventEmitService', function ApEventEmitService($timeout) {
            var s = this;
            function ApEvent(eventName) {
                var s = this;
                s.name = eventName;
            }

            s._handlers = {};

            /**
             * Emit a event.
             * @param {string} eventName - Event name to emit.
             * @param {object} data - Data to emit.
             */
            s.emit = function (eventName, data) {
                var s = this,
                    event = new ApEvent(eventName),
                    handlers = s._handlers[eventName] || [];
                $timeout(function () {
                    for (var i = 0, len = handlers.length; i < len; i++) {
                        var handler = handlers[i];
                        handler(event, data);
                    }
                });
                return s;
            };

            /**
             * Register an event handler.
             * @param {string} eventName - Event name to handle.
             * @param {function} handler - Handler function.
             */
            s.on = function (eventName, handler) {
                var s = this,
                    handlers = s._handlers[eventName] || [];
                handlers.push(handler);
                s._handlers[eventName] = handlers;
                return s;
            }

        });

})(angular);
/**
 * @ngdoc object
 * @name apLangDetectService
 * @description Ap lang detect service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLangDetectService', function ApLangDetectService(apUrlUtil, $location) {
            var s = this;
            /**
             * Get lang for url.
             * @param {string} url - Url to detect from
             * @param {string[]} supportedLangs
             * @returns {string|null} - Detected lang.
             */
            s._langWithUrl = function (url, supportedLangs) {
                supportedLangs = [].concat(supportedLangs);
                var hostname = apUrlUtil.hostnameInUrl(url),
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
             * Detect a lang with url.
             * @param {string[]} supportedLangs
             * @returns {string|null} - Detected lang.
             */
            s.detectLang = function (supportedLangs) {
                var url = $location.href;
                return s._langWithUrl(url, supportedLangs);
            };
        });

})(angular);
/**
 * @ngdoc object
 * @name apLocalStorageService
 * @description Ap local storage service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLocalStorageService', function ApLocalStorageService(apJsonUtil) {
            var s = this;
            /**
             * Set data to local storage.
             * @param {string} key - Key for data.
             * @param {object} data - Data to save.
             */
            s.set = function (key, data) {
                var str = apJsonUtil.stringifyJson(data);
                if (str) {
                    localStorage.setItem(key, str);
                }
            };
            /**
             * Get stored data.
             * @param {string} key - Key for data.
             * @returns {object|null} - Stored data for the key.
             */
            s.get = function (key) {
                var str = localStorage.getItem(key);
                if (!str) {
                    return null;
                }
                return apJsonUtil.parseJsonString(str);
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name apLocaleStoreService
 * @description Ap locale load service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLocaleStoreService', function ApLocaleStoreService() {
            var s = this;
            /**
             * Locale data.
             * @type {object}
             * @private
             */
            s._locales = {};

            /**
             * Register locale data.
             * @param {string} lang - Lang of the locales.
             * @param {object} data - Locale data.
             */
            s.register = function (lang, data) {
                s._locales[lang] = data;
            };

            /**
             * Register langs.
             * @param {object} data - Data to register.
             */
            s.registerAll = function (data) {
                Object.keys(data).forEach(function (lang) {
                    s.register(lang, data[lang]);
                });
            };


            /**
             * Local data for a lang.
             * @param {string} lang
             * @returns {object} - Locale data.
             */
            s.localeForLang = function (lang) {
                var locales = s._locales,
                    isValidLang = locales.hasOwnProperty(lang);
                if (!isValidLang) {
                    var err = '[ap.services.apLocaleStoreService]Unknown lang: ' + lang;
                    throw new Error(err);
                }
                return locales[lang];
            };
        });

})(angular);
/**
 * @ngdoc object
 * @name apLocationChangeService
 * @description Ap location change service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLocationChangeService', function ApLocationChangeService($window, $anchorScroll) {
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

})(angular);
/**
 * @ngdoc object
 * @name apLocationResolveService
 * @description Ap location resolve service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLocationResolveService', function ApLocationResolveService(apUrlUtil, $window) {
            var s = this,
                location = $window.location;

            s.baseUrl = apUrlUtil.baseUrlWithLocation(location);

            /**
             * Resolve url.
             * @param {string} url - Url to resolve
             * @returns {string} - Resolved url.
             */
            s.resolveUrl = function (url) {
                if (!url) {
                    return url;
                }
                if (url.match(/^\//)) {
                    return apUrlUtil.joinUrl(s.baseUrl, url.replace(/^\//, ''));
                }
                return apUrlUtil.joinUrl(location.href, url);
            }

        });

})(angular);
/**
 * @ngdoc object
 * @name apLocationSearchService
 * @description Ap location search service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apLocationSearchService', function ApLocationSearchService(apObjectUtil, $location) {
            var s = this;
            /**
             * Get location search with key and delete the key from search.
             * @param {string} key - Search key.
             * @returns {string} - Search value with the key.
             */
            s.consume = function (key) {
                var search = $location.search(),
                    val = search[key];
                delete search[key];
                $location.search(search);
                return val;
            };

            /**
             * Change search value.
             * @param {string} key - Key to set.
             * @param {string} val - Value to set.
             */
            s.update = function (key, val) {
                var values;
                if (arguments.length == 2) {
                    values = {};
                    values[key] = val;
                    s.update(values);
                    return;
                }
                values = apObjectUtil.flatten(arguments[0]);
                var search = $location.search();
                Object.keys(values).forEach(function (key) {
                    search[key] = values[key];
                });
                $location.search(search);
            };
            /**
             * Get search type.
             * @param {string} key - Key to search.
             * @returns {string|object} - Search value
             */
            s.get = function (key) {
                var search = $location.search();
                if (arguments.length == 0) {
                    return search;
                }
                return search[key];
            };

            /**
             * Get search by pattern
             * @param pattern
             * @returns {object} values.
             */
            s.getByPattern = function (pattern) {
                var search = $location.search(),
                    result = {};
                Object.keys(search).forEach(function (key) {
                    var shouldGet = key.match(pattern);
                    if (shouldGet) {
                        result[key] = search[key];
                    }
                });
                return result;
            };

            /**
             * Delete search with pattern.
             * @param pattern
             */
            s.deleteByPattern = function (pattern) {
                var search = $location.search();
                Object.keys(search).forEach(function (key) {
                    var shouldDelete = key.match(pattern);
                    if (shouldDelete) {
                        delete search[key];
                    }
                });
                $location.search(search);
            }
        });

})(angular);
/**
 * @ngdoc object
 * @name apTemplateCacheService
 * @description Ap template cache service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apTemplateCacheService', function ApTemplateCacheService($templateCache) {
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

})(angular);
/**
 * @ngdoc object
 * @name apUrlFormatService
 * @description Ap url format service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.services')
        .service('apUrlFormatService', function ApUrlFormatService() {
            var s = this;
            /**
             * Format a url
             * @param {string} urlString - Url string.
             * @param {object} data - Data to format.
             */
            s.formatUrl = function (urlString, data) {
                var joiner = '/';
                data = data || {};
                return urlString
                    .split(joiner)
                    .map(function (pathname) {
                        var isVariable = pathname.match(/^:/);
                        if (isVariable) {
                            var key = pathname.replace(/^:/, '');
                            if (!data.hasOwnProperty(key)) {
                                throw new Error('Missing key: ' + pathname);
                            }
                            return data[key];
                        }
                        return pathname;
                    })
                    .join(joiner);
            }
        });

})(angular);
/**
 * @ngdoc module
 * @module ap.utils
 */

(function (ng) {
    "use strict";
    ng
        .module('ap.utils', [
            
        ]);
})(angular);

/**
 * @ngdoc object
 * @name apArrayUtil
 * @description Ap array util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apArrayUtil', function defineApArrayUtil() {
            return {
                /**
                 * Create a unique array.
                 * @param array - Array to unique.
                 * @returns {array} - Unique array.
                 */
                unique: function (array) {
                    return array.filter(function (entry, i, array) {
                        return array.indexOf(entry) === i;
                    });
                },
                /**
                 * Convert array in to hash.
                 * @param {array} array - Array to convert.
                 * @param {string} key - Key for hash.
                 * @returns {{}}
                 */
                toHashWithKey: function (array, key) {
                    var hash = {};
                    array.forEach(function (entry) {
                        var val = entry[key];
                        hash[val] = entry;
                    });
                    return hash;
                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name apJsonUtil
 * @description Ap json util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apJsonUtil', function defineApJsonUtil() {
            return {
                /**
                 * From string.
                 * @param {string} str - Json string.
                 * @returns {object} - Parsed json object.
                 */
                parseJsonString: function (str) {
                    try {
                        return JSON.parse(str);
                    } catch (e) {
                        return null;
                    }
                },
                /**
                 * Stringify json object.
                 * @param {object} obj - Json object.
                 * @returns {string} - Stringified data.
                 */
                stringifyJson: function (obj) {
                    try {
                        return JSON.stringify(obj);
                    } catch (e) {
                        return null;
                    }
                },
                reviveEncoded: function (key, val) {
                    if (typeof(val) === 'string') {
                        return decodeURIComponent(val);
                    }
                    return val;
                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name apMathUtil
 * @description Ap math util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apMathUtil', function defineApMathUtil() {
            return {
                compareLength: function (a, b) {
                    return a.length - b.length;
                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name apObjectUtil
 * @description Ap object util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apObjectUtil', function defineApObjectUtil() {
            var u = {
                /**
                 * Copy an object.
                 * @param {object} src - Object to copy from.
                 * @param {object} dest - Object to copy to.
                 * @returns {object} - Destination object.
                 */
                copy: function copy(src, dest) {
                    return u.copyWithKeyPattern(src, dest, null);
                },
                /**
                 * Copy properties with key pattern.
                 * @param {object} src - Object to copy from.
                 * @param {object} dest - Object to copy to.
                 * @param pattern
                 * @returns {*}
                 */
                copyWithKeyPattern: function (src, dest, pattern) {
                    var keys = Object.keys(src);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        if (pattern) {
                            var skip = !key.match(pattern);
                            if (skip) continue;
                        }
                        dest[key] = src[key];
                    }
                    return dest;
                },
                /**
                 * Get key of an object with value.
                 * @param {object} object - Object to work with.
                 * @param {*} value - Value to detect.
                 * @returns {string} - Found value.
                 */
                keyForValue: function (object, value) {
                    var keys = Object.keys(object || {});
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i],
                            hit = object[key] === value;
                        if (hit) {
                            return key;
                        }

                    }
                    return null;
                },
                /**
                 * Get object values.
                 * @param {object} data - Data to work with.
                 * @returns {*[]} - Value list.
                 */
                values: function (data) {
                    return Object.keys(data).map(function (key) {
                        return data[key];
                    });
                },
                /**
                 * Expand flattened data.
                 * @param {object} data - Data to expand.
                 * @returns {object} -  Expanded data.
                 */
                expand: function (data) {
                    var result = {};
                    Object.keys(data).forEach(function (key) {
                        var val = data[key];
                        if (key.match(/\./g)) {
                            var subKeys = key.split(/\./g),
                                subObj = {},
                                thisKey = subKeys.shift();
                            subObj[subKeys.join('.')] = val;
                            var subExpandedObj = u.expand(subObj);
                            result[thisKey] = u.copy(subExpandedObj, result[thisKey] || {});
                        } else {
                            result[key] = val;
                        }
                    });
                    return result;
                },
                /**
                 * Flatten object.
                 * @param {object} data - Data to flatten.
                 * @returns {object} - Flattened object.
                 */
                flatten: function (data) {
                    var result = {};
                    Object.keys(data).forEach(function (key) {
                        var val = data[key];
                        var isObj = typeof(val) === 'object';
                        if (isObj) {
                            var subValues = u.flatten(val);
                            Object.keys(subValues).forEach(function (subKey) {
                                var fullKey = [key, subKey].join('.');
                                result[fullKey] = subValues[subKey];
                            });
                            return;
                        }
                        result[key] = val;
                    });
                    return result;
                }
            }
            return u;
        });
})(angular);
/**
 * @ngdoc object
 * @name apQueryStringUtil
 * @description Ap query string util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apQueryStringUtil', function defineApQueryStringUtil(apObjectUtil) {
            return {
                /**
                 * Covert query string to object.
                 * @param {string} queryString - String to convert.
                 * @returns {Object|void|*}
                 */
                fromQueryString: function (queryString) {
                    var values = {};
                    queryString.replace(/^\?/, '').split('&')
                        .map(function (keyVal) {
                            return keyVal.split('=');
                        })
                        .forEach(function (keyVal) {
                            var key = keyVal[0],
                                val = keyVal[1];
                            values[key] = decodeURIComponent(val);
                        });
                    return apObjectUtil.expand(values);
                },
                /**
                 * Convert to query string.
                 * @param {object} values - Values to convert.
                 * @returns {string}
                 */
                toQueryString: function (values) {
                    values = apObjectUtil.flatten(values || {});
                    return Object.keys(values).map(function (key) {
                        var val = values[key];
                        return [key, encodeURIComponent(val)].join('=');
                    }).join('&');
                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name stringUtil
 * @description String util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apStringUtil', function defineStringUtil() {
            return {
                /**
                 * Convert a string into camel string.
                 * @param {string} str - String to convert.
                 * @returns {string} - Converted string.
                 */
                camelize: function (str) {
                    return str[0].toLowerCase() + str.replace(/[\-_]([a-z])/g, function (a, b) {
                            return b.toUpperCase();
                        }).slice(1);
                },
                /**
                 * Convert to under scored string.
                 * @param {string} str - String to convert.
                 * @returns {string} - Converted string.
                 */
                underscorize: function (str) {
                    return str.replace(/([A-Z])/g, function ($1) {
                        return "_" + $1.toLowerCase();
                    });
                },
                /**
                 * Convert to japanese hiragana
                 * @param {string} str - String to convert.
                 * @returns {*|string} - Converted string.
                 */
                toHiragana: function (str) {
                    return str && str.replace(/[ァ-ン]/g, function (s) {
                            return String.fromCharCode(s.charCodeAt(0) - 0x60);
                        });
                },
                /**
                 * Convert to japanese katakana.
                 * @param {string} str - String to convert.
                 * @returns {*|string} - Converted string.
                 */
                toKatakana: function (str) {
                    return str && str.replace(/[ぁ-ん]/g, function (s) {
                            return String.fromCharCode(s.charCodeAt(0) + 0x60);
                        });

                }
            }
        });
})(angular);
/**
 * @ngdoc object
 * @name apUrlUtil
 * @description Ap url util.
 */
(function (ng) {
    "use strict";

    ng
        .module('ap.utils')
        .factory('apUrlUtil', function defineApUrlUtil($window) {
            var document = $window.document;

            function parseURL(urlString) {
                var a = document.createElement('a');
                a.href = urlString || '';
                return {
                    protocol: a.protocol, // => "http:"
                    hostname: a.hostname, // => "example.com"
                    port: a.port,     // => "3000"
                    pathname: a.pathname, // => "/pathname/"
                    search: a.search,   // => "?search=test"
                    hash: a.hash,     // => "#hash"
                    host: a.host     // => "example.com:3000"
                }
            }
            return {
                /**
                 * Get base url for a location.
                 * @param location - Location object.
                 * @returns {string} - Base url string.
                 */
                baseUrlWithLocation: function (location) {
                    return location.origin || [
                            [location.protocol, location.hostname].join("//"),
                            (location.port ? ':' + location.port : '')
                        ].join('');
                },
                /**
                 * Get host name from url.
                 * @param url
                 */
                hostnameInUrl: function (url) {
                    return parseURL(url).hostname;
                },
                /**
                 * Join url.
                 * @param {string...} [components] - Pathnames to join.
                 * @returns {string} - Joined url.
                 */
                joinUrl: function (/** components **/) {
                    return Array.prototype.slice.call(arguments, 0).reduce(function (result, current) {
                        if (!result) {
                            return current;
                        }
                        var joiner = result.match(/\/$/) ? '' : '/';
                        return [result, current].join(joiner);
                    }, null);
                },
                /**
                 * Parse a url.
                 * @param urlString
                 * @returns {object} - Parsed url.
                 */
                parseURL: parseURL
            }
        });
})(angular);
