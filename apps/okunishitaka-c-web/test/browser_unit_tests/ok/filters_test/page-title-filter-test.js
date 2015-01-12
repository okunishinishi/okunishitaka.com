/**
 * Test for pageTitle
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('pageTitleFilter', function () {
    var pageTitleFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            pageTitleFilter = $filter('pageTitleFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(pageTitleFilter).toBeDefined();
    });

});