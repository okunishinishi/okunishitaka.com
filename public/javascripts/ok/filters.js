/**
 * ok filters module.
 * @requires angular
 */

(function (ng) {
    "use strict";
    ng
        .module('ok.filters', [
            'ok.entities',
            'ok.utils'
        ]);
})(angular);

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
