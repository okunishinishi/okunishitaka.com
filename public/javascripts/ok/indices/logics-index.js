/**
 * Logics index.
 * @requires angular
 * @requires apeman
 */
(function (ng, ap) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('logicsIndex', function defineLogicsIndex($injector) {
            return {
                get errorCodeLogic() { return $injector.get('errorCodeLogic'); },
                get multiLangUrlLogic() { return $injector.get('multiLangUrlLogic'); },
                get pageTitleLogic() { return $injector.get('pageTitleLogic'); }
            }
        });
})(angular, apeman);