/**
 * Test for linkUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('linkUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (linkUrlConstant) {
        expect(linkUrlConstant).toBeDefined();
    }));
});