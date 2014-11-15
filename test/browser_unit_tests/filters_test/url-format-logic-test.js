/**
 * Test for urlFormat
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('urlFormatLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (urlFormatLogic) {
        expect(urlFormatLogic).toBeDefined();
    }));

    it('Format an url', inject(function (urlFormatLogic) {
        var formatUrl = urlFormatLogic.formatUrl.bind(urlFormatLogic);
        expect(formatUrl('/blogs/:_id', {_id: '1234'})).toEqual('/blogs/1234');
        expect(formatUrl('/blogs/:_id/:_idd', {_id: '1234', _idd: '5678'})).toEqual('/blogs/1234/5678');
    }));
});