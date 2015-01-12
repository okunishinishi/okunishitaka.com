/**
 * Test for htmlText
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('htmlTextFilter', function () {
    var htmlTextFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            htmlTextFilter = $filter('htmlTextFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(htmlTextFilter).toBeDefined();
    });

    it('Do filter.', function () {
        expect(htmlTextFilter('<h1>foo</h1>')).toEqual('foo');
    })

});