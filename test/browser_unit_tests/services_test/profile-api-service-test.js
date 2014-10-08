/**
 * Test for profileApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('profileApiService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (profileApiService) {
        expect(profileApiService).toBeDefined();
    }));
});