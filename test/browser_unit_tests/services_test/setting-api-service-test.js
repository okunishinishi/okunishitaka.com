/**
 * Test for settingApi
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('settingApiService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (settingApiService) {
        expect(settingApiService).toBeDefined();
    }));
});