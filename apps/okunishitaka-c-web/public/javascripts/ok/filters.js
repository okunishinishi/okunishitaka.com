/**
 * @ngdoc module
 * @module ok.filters
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.services',
            'ok.utils'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, moment) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                return moment(date).format('YYYY/MM/DD');
            };
        });
})(angular, moment);
/**
 * @ngdoc filter
 * @filter htmlTextFilter
 * @description Html text filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('htmlTextFilter', function defineHtmlTextFilter() {
            return function htmlTextFilter(input) {
                try {
                    return $(input).text();
                } catch (e) {
                    return input;
                }
            };
        });
})(angular);
/**
 * @ngdoc filter
 * @filter markdownRenderFilter
 * @description Markdown render filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('markdownRenderFilter', function defineMarkdownRenderFilter(markdownRenderService) {
            return function markdownRenderFilter(text) {
                return markdownRenderService.render(text);
            };
        });
})(angular);
/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter(stringUtil) {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                var pageNames = l.pageNames || {};
                pageName = pageNames[stringUtil.underscorize(pageName).toUpperCase()];
                if (!pageName) {
                    return appName;
                }
                return [pageName, appName].join(' - ');
            };
        });
})(angular);
/**
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, one) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var _cached = _cache[seed];
                if (_cached) {
                    return _cached;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 41 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, one);
/**
 * @ngdoc filter
 * @filter textEllipsisFilter
 * @description Text ellipsis filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textEllipsisFilter', function defineTextEllipsisFilter() {
            return function textEllipsisFilter(text, maxLength) {
                if (!text) {
                    return '';
                }
                var suffix = '...';
                return text.substr(0, maxLength - suffix.length) + suffix;
            };
        });
})(angular);
/**
 * @ngdoc filter
 * @filter textLinkFilter
 * @description Text link filter
 */

(function (ng) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textLinkFilter', function defineTextLinkFilter(linkUrlConstant, imageUrlConstant) {
            return function textLinkFilter(text, links) {
                var html = String(text);
                Object.keys(links || {}).forEach(function (key) {
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
            };
        });
})(angular);
