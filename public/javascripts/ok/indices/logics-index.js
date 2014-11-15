/**
 * Logics index.
 * @requires angular
 * @requires apeman
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.indices')
        .factory('logicsIndex', function defineLogicsIndex($injector) {
            return {
                get errorCodeLogic() { return $injector.get('errorCodeLogic'); },
                get textLinkLogic() { return $injector.get('textLinkLogic'); }
            };
        });
})(angular);