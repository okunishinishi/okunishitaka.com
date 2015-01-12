/**
 * Test for urlFormat
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('urlFormatService', function () {
    var urlFormatService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['urlFormatService', function (injected) {
            urlFormatService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(urlFormatService).toBeDefined();
    });
});