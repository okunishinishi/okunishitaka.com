/**
 * Test for code
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('codeConstant', function () {
    var codeConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['codeConstant', function (injected) {
            codeConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(codeConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(codeConstant).forEach(function (key) {
            expect(codeConstant[key]).toBeDefined();
        });
    });
});