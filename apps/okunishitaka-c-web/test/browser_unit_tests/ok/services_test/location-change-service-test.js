/**
 * Test for locationChange
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationChangeService', function () {
    var locationChangeService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['locationChangeService', function (injected) {
            locationChangeService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(locationChangeService).toBeDefined();
    });
});