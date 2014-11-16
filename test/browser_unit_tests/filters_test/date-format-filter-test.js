/**
 * Test for dateFormat
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('dateFormatFilter', function () {

    var dateFormatFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            dateFormatFilter = $filter('dateFormatFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(dateFormatFilter).toBeDefined();
    }));

    it('Filter a date.', inject(function () {
        expect(dateFormatFilter(new Date().getTime())).toBeDefined();
    }));
});