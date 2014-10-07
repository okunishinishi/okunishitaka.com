/**
 * Test for browserDetect
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('browserDetectService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (browserDetectService) {
        expect(browserDetectService).toBeDefined();
    }));
});