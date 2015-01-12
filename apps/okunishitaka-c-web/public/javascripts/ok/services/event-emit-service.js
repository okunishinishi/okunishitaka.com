/**
 * @ngdoc object
 * @name eventEmitService
 * @description Event emit service.
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.services')
        .service('eventEmitService', function EventEmitService(apEventEmitService) {
            var s = this;
            s.__proto__ = apEventEmitService;

        });

})(angular);