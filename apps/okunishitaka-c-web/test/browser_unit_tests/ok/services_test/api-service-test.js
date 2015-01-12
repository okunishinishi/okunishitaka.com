/**
 * Test for api
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('apiService', function () {
    var apiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['apiService', function (injected) {
            apiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(apiService).toBeDefined();
    });
});