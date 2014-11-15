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
        expect(langDetectService._langWithURL('http://en.blog.example.com', ['ja', 'en'])).toEqual('en');
        expect(langDetectService._langWithURL('http://ja.blog.example.com', ['ja', 'en'])).toEqual('ja');
        expect(langDetectService.detectLang()).toBeDefined();
    }));
});