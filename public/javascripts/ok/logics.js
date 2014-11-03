/**
 * ok logics module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.logics', [
            'ok.constants',
            'ok.entities',
            'ok.errors',
            'ok.utils'
        ]);
})(angular);

/**
 * Error code logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('errorCodeLogic', function defineErrorCodeLogic(codeConstant) {
            var appErrorCodes = codeConstant.appErrorCodes,
                httpStatusCodes = codeConstant.httpStatusCodes;
            return {
                /**
                 * Unexpected error code.
                 * @type {number}
                 */
                UNEXPECTED_ERROR: codeConstant.appErrorCodes.UNEXPECTED_ERROR,
                /**
                 * Get error code for http status
                 * @param {number} statusCode - HTTP status code.
                 */
                errorCodeWithHttpStatus: function (statusCode) {
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
            }
        });
})(angular, apeman);
/**
 * Multi lang url logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('multiLangUrlLogic', function defineMultiLangUrlLogic(urlUtil) {
            return {
                /**
                 * Get lang for url.
                 */
                langForUrl: function (url, supportedLangs) {
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
                }
            }
        });
})(angular, apeman);
/**
 * Page title logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('pageTitleLogic', function definePageTitleLogic() {
            return {
                /**
                 * Get title for a page.
                 * @param {object} l - Locale object.
                 * @param {string} pageName - Page name.
                 */
                tilteForPage: function (l, pageName) {
                    var appName = l.meta.NAME;
                    if (!pageName) {
                        return appName;
                    }
                    pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                    return [pageName, appName].join(' - ');
                }
            }
        });
})(angular, apeman);
/**
 * Tag color logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap, one) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('tagColorLogic', function defineTagColorLogic(hashUtil) {
            return {
                tagColor: function (title, namespace) {
                    var seed = [title, namespace || ''].join('-'),
                        hashCode = hashUtil.toHashCode(seed);
                    var hue = parseInt(hashCode % 50 + 100) / 100.0;
                    var color = one.color('#a9d91d').hue(hue, true).hex();
                    if (!color.match(/^#/)) {
                        color = '#' + color;
                    }
                    return  color;
                }
            }
        });
})(angular, apeman, one);
/**
 * Text link logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('textLinkLogic', function defineTextLinkLogic(linkUrlConstant, imageUrlConstant) {
            return {
                toLinkedHtml: function (text, links) {
                    var html = String(text);
                    Object.keys(links).forEach(function (key) {
                        html = html.replace(new RegExp(key, 'g'), function (text) {
                            var name = links[key],
                                href = linkUrlConstant[name] || imageUrlConstant[name];
                            if (href) {
                                return '<a href="' + href + '">' + text + '</a>';
                            } else {
                                return text;
                            }
                        });
                    });
                    return html;

                }
            }
        });
})(angular, apeman);
/**
 * Url format logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('urlFormatLogic', function defineUrlFormatLogic() {
            return {
                /**
                 * Format a url
                 * @param {string} urlString - Url string.
                 * @param {object} data - Data to format.
                 */
                formatUrl: function (urlString, data) {
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
            }
        });
})(angular, apeman);
