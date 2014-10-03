/**
 * Test for partial
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('partialConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (partialConstant) {
        expect(partialConstant).toBeDefined();
    }));
});