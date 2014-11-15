/**
 * Test for urlFormat
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('urlFormatService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (urlFormatService) {
        expect(urlFormatService).toBeDefined();
    }));
    it('Format url.', inject(function (urlFormatService) {
        var formatUrl = urlFormatService.formatUrl.bind(urlFormatService);
        expect(formatUrl('/blogs/:_id', {_id: '1234'})).toEqual('/blogs/1234');
        expect(formatUrl('/blogs/:_id/:_idd', {_id: '1234', _idd: '5678'})).toEqual('/blogs/1234/5678');
    }));
});