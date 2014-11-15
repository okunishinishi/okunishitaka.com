/**
 * Test for pageTitle
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('pageTitleFilter', function () {

    var pageTitleFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            pageTitleFilter = $filter('pageTitleFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(pageTitleFilter).toBeDefined();
    }));
});