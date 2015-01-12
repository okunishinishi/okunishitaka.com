/**
 * Test for toastMessage
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('toastMessageService', function () {
    var toastMessageService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['toastMessageService', function (injected) {
            toastMessageService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(toastMessageService).toBeDefined();
    });
});