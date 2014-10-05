/**
 * Test for errorCode
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('errorCodeLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (errorCodeLogic) {
        expect(errorCodeLogic).toBeDefined();
    }));

    it('Get error code.', inject(function (errorCodeLogic) {
        expect(errorCodeLogic.errorCodeWithHttpStatus(404)).toBeDefined();
        expect(errorCodeLogic.errorCodeWithHttpStatus(200)).toBe(null);
    }));
});