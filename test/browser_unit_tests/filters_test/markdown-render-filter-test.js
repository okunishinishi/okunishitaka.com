/**
 * Test for markdownRender
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('markdownRenderFilter', function () {

    var markdownRenderFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            markdownRenderFilter = $filter('markdownRenderFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(markdownRenderFilter).toBeDefined();
    }));
});