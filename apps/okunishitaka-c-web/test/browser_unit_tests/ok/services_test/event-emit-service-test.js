/**
 * Test for eventEmit
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('eventEmitService', function () {
    var eventEmitService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['eventEmitService', function (injected) {
            eventEmitService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(eventEmitService).toBeDefined();
    });
});