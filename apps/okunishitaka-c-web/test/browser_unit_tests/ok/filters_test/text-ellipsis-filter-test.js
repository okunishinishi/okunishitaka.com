/**
 * Test for textEllipsis
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textEllipsisFilter', function () {
    var textEllipsisFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            textEllipsisFilter = $filter('textEllipsisFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(textEllipsisFilter).toBeDefined();
    });

    it('Do filter.', function () {
        var filtered = textEllipsisFilter('foobarbazquz', 3);
        expect(filtered).toBeDefined();
    });

});