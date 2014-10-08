/**
 * Test for workApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('workApiService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (workApiService) {
        expect(workApiService).toBeDefined();
    }));
});