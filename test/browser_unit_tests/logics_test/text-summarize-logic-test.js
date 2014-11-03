/**
 * Test for textSummarize
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textSummarizeLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (textSummarizeLogic) {
        expect(textSummarizeLogic).toBeDefined();
    }));

    it('Summarize', inject(function (textSummarizeLogic) {
        var text = textSummarizeLogic.summarize('foobar', 4);
        expect(text).toEqual('f...');
    }));
});