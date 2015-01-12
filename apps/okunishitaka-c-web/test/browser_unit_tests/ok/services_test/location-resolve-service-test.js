/**
 * Test for locationResolve
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationResolveService', function () {
    var locationResolveService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['locationResolveService', function (injected) {
            locationResolveService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(locationResolveService).toBeDefined();
    });
});