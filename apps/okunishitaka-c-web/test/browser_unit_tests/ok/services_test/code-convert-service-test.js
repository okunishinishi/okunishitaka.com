/**
 * Test for codeConvert
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('codeConvertService', function () {
    var codeConvertService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['codeConvertService', function (injected) {
            codeConvertService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(codeConvertService).toBeDefined();
    });
});