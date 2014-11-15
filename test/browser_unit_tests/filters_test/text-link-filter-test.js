/**
 * Test for textLink
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textLinkFilter', function () {

    var textLinkFilter;
    beforeEach(mock.module('ok.filters'));
    beforeEach(function () {
        inject(function ($filter) {
            textLinkFilter = $filter('textLinkFilter');
        });
    });
    it('Inject the filter.', inject(function () {
        expect(textLinkFilter).toBeDefined();
    }));
    it('Do filter.', function () {
        expect(textLinkFilter('Foo Bar Baz', {
            Bar: 'ABOUT_MARK_DOWN'
        })).toBeDefined();
    });
});