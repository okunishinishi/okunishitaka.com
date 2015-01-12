/**
 * Test for markdownRender
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('markdownRenderFilter', function () {
    var markdownRenderFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            markdownRenderFilter = $filter('markdownRenderFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(markdownRenderFilter).toBeDefined();
    });

});