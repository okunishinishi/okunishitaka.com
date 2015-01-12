/**
 * Test for markdownRender
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('markdownRenderService', function () {
    var markdownRenderService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['markdownRenderService', function (injected) {
            markdownRenderService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(markdownRenderService).toBeDefined();
    });
});