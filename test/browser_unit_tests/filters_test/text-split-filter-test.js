/**
 * Test for textSplit
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textSplitFilter', function () {

    var textSplitFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            textSplitFilter = $filter('textSplitFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(textSplitFilter).toBeDefined();
    }));

    it('Split text.', inject(function () {
        var splitted = textSplitFilter('foo,bar');
        expect(splitted).toBeDefined();
        expect(splitted[0]).toEqual('foo');
    }));
});