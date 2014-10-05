/**
 * Test for pageUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('pageUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (pageUrlConstant) {
        expect(pageUrlConstant).toBeDefined();
    }));
});