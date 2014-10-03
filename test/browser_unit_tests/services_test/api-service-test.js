/**
 * Test for api
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('apiService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (apiService) {
        expect(apiService).toBeDefined();
    }));
});