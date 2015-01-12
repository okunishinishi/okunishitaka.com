/**
 * Test for profileApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('profileApiService', function () {
    var profileApiService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['profileApiService', function (injected) {
            profileApiService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(profileApiService).toBeDefined();
    });
});