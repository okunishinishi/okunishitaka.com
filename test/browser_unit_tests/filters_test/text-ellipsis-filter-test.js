/**
 * Test for textEllipsis
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textEllipsisFilter', function () {

    var textEllipsisFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            textEllipsisFilter = $filter('textEllipsisFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(textEllipsisFilter).toBeDefined();
    }));

    it('Throw the filter.', inject(function () {
        var filtered = textEllipsisFilter('foobarbazquz', 3);
        expect(filtered).toBeDefined();
    }));
});