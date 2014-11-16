/**
 * ok filters module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.constants',
            'ok.entities',
            'ok.utils',
            'ok.services'
        ]);
})(angular);

/**
 * @ngdoc filter
 * @filter dateFormatFilter
 * @description Date format filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('dateFormatFilter', function defineDateFormatFilter() {
            return function dateFormatFilter(date) {
                date = new Date(date);
                var yyyyMMdd = [
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                ].join('/');
                return yyyyMMdd;
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter markdownRenderFilter
 * @description Markdown render filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('markdownRenderFilter', function defineMarkdownRenderFilter(markdownRenderService) {
            return function markdownRenderFilter(text) {
                return markdownRenderService.render(text);
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter pageTitleFilter
 * @description Page title filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('pageTitleFilter', function definePageTitleFilter() {
            return function pageTitleFilter(pageName, l) {
                var appName = l.meta.NAME;
                if (!pageName) {
                    return appName;
                }
                pageName = l.pageNames[pageName.toUpperCase()] || pageName;
                return [pageName, appName].join(' - ');
            };
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter tagColorFilter
 * @description Tag color filter
 */

(function (ng, ap) {
    "use strict";
    ng
        .module('ok.filters')
        .filter('tagColorFilter', function defineTagColorFilter(hashUtil) {
            var _cache = {};
            return function tagColorFilter(title, namespace) {
                var seed = [title, namespace || ''].join('-');
                var cahched = _cache[seed];
                if (cahched) {
                    return cahched;
                }
                var hashCode = hashUtil.toHashCode(seed);
                var hue = parseInt(hashCode % 50 + 100) / 100.0,
                    color = one.color('#a9d91d').hue(hue, true).hex();
                if (!color.match(/^#/)) {
                    color = '#' + color;
                }
                _cache[seed] = color;
                return color;
            }
        });
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textEllipsisFilter
 * @description Text ellipsis filter
 */

(function (ng, ap) {
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
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textLinkFilter
 * @description Filter to convert links.
 */

(function (ng, ap) {
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
})(angular, apeman);
/**
 * @ngdoc filter
 * @filter textSplitFilter
 * @description Text split filter
 */

(function (ng, ap) {
    "use strict";

    ng
        .module('ok.filters')
        .filter('textSplitFilter', function defineTextSplitFilter() {
            return function textSplitFilter(text, seperator) {
                if (!text) {
                    return [];
                }
                return String(text).split(seperator || ',');
            };
        });
})(angular, apeman);
