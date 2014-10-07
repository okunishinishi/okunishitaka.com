/**
 * Test for markdownRender
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('markdownRenderService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (markdownRenderService) {
        expect(markdownRenderService).toBeDefined();
    }));

    it('Render text.', inject(function (markdownRenderService) {
        var rendered = markdownRenderService.render('###foo\nbar');
        expect(rendered).toBeDefined();
    }));
});