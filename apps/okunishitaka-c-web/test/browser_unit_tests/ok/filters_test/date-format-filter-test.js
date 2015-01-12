/**
 * Test for dateFormat
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('dateFormatFilter', function () {
    var dateFormatFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            dateFormatFilter = $filter('dateFormatFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(dateFormatFilter).toBeDefined();
    });

    it('Do format.', function () {
        var label = dateFormatFilter(new Date('2014/10/12'));
        expect(label).toEqual('2014/10/12');
    });
});