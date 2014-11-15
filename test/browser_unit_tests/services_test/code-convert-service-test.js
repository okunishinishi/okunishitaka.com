/**
 * Test for codeConvert
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('codeConvertService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (codeConvertService) {
        expect(codeConvertService).toBeDefined();
    }));

    it('Get error code.', inject(function (codeConvertService) {
        expect(codeConvertService.errorCodeWithHttpStatus(404)).toBeDefined();
        expect(codeConvertService.errorCodeWithHttpStatus(200)).toBe(null);
    }));
});