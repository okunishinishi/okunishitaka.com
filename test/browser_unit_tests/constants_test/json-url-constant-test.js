/**
 * Test for jsonUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('jsonUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (jsonUrlConstant) {
        expect(jsonUrlConstant).toBeDefined();
    }));
});