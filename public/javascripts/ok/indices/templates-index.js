/**
 * Templates index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('templatesIndex', function defineTemplatesIndex($injector) {
            return {
                get footerHtmlTemplate() { return $injector.get('footerHtmlTemplate'); },
                get headerHtmlTemplate() { return $injector.get('headerHtmlTemplate'); },
                get metaHtmlTemplate() { return $injector.get('metaHtmlTemplate'); }
            }
        });
})(angular, apeman);