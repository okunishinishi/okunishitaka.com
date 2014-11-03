/**
 * Text summarize logic.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.logics')
        .factory('textSummarizeLogic', function defineTextSummarizeLogic() {
            return {
                summarize: function (text, maxLength) {
                    if (!text) {
                        return '';
                    }
                    var suffix = '...';
                    return text.substr(0, maxLength - suffix.length) + suffix;
                }
            }
        });
})(angular, apeman);