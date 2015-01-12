/**
 * Test for textLink
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textLinkFilter', function () {
    var textLinkFilter;
    beforeEach(function () {
        mock.module('ok.filters');
        inject(function ($filter) {
            textLinkFilter = $filter('textLinkFilter');
        });
    });

    it('Inject the filter.', function () {
        expect(textLinkFilter).toBeDefined();
    });

});