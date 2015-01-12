/**
 * Test for tagColor
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('tagColorFilter', function () {
    var tagColorFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            tagColorFilter = $filter('tagColorFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(tagColorFilter).toBeDefined();
    });

});