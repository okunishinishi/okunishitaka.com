/**
 * Test for localStorage
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('localStorageService', function () {
    var localStorageService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['localStorageService', function (injected) {
            localStorageService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(localStorageService).toBeDefined();
    });
});