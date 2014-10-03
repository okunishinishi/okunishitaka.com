/**
 * Test for code
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('codeConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (codeConstant) {
        expect(codeConstant).toBeDefined();
    }));
});