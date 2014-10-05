/**
 * Test for partialUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('partialUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (partialUrlConstant) {
        expect(partialUrlConstant).toBeDefined();
    }));
});