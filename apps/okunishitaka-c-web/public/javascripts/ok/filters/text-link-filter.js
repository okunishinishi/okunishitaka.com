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