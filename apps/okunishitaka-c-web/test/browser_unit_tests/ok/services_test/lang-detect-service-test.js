/**
 * Test for langDetect
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('langDetectService', function () {
    var langDetectService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['langDetectService', function (injected) {
            langDetectService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(langDetectService).toBeDefined();
    });
});