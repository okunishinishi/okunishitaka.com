/**
 * Test for tagColor
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('tagColorFilter', function () {

    var tagColorFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            tagColorFilter = $filter('tagColorFilter');
        });
    });

    it('Inject the filter.', inject(function () {
        expect(tagColorFilter).toBeDefined();
    }));

    it('Get color.', inject(function () {
        var c1 = tagColorFilter('foo'),
            c2 = tagColorFilter('foo'),
            c3 = tagColorFilter('bar'),
            c4 = tagColorFilter('foo');
        expect(c1).toEqual(c2);
    }));
});