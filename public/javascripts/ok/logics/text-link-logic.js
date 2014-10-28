/**
 * Text link logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('textLinkLogic', function defineTextLinkLogic(linkUrlConstant) {
            return {
                toLinkedHtml: function (text, links) {
                    var html = String(text);
                    Object.keys(links).forEach(function (key) {
                        html = html.replace(new RegExp(key, 'g'), function (text) {
                            var href = linkUrlConstant[links[key]];
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