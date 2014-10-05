/**
 * Test for multiLangUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('multiLangUrlLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (multiLangUrlLogic) {
        expect(multiLangUrlLogic).toBeDefined();
    }));

    it('Get lang for url.', inject(function (multiLangUrlLogic) {
        expect(multiLangUrlLogic.langForUrl('http://en.blog.example.com', ['ja', 'en'])).toEqual('en');
        expect(multiLangUrlLogic.langForUrl('http://ja.blog.example.com', ['ja', 'en'])).toEqual('ja');

    }));
});