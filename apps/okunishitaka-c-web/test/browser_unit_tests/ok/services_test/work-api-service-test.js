/**
 * Test for workApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('workApiService', function () {
    var workApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['workApiService', function (injected) {
            workApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(workApiService).toBeDefined();
    });
});