/**
 * Test for apiUrl
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('apiUrlConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (apiUrlConstant) {
        expect(apiUrlConstant).toBeDefined();
    }));
});