/**
 * Test for langDetect
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('langDetectService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (langDetectService) {
        expect(langDetectService).toBeDefined();
    }));

    it('Detecta a lang', inject(function (langDetectService) {
        expect(langDetectService.detectLang()).toBeDefined();
    }));
});