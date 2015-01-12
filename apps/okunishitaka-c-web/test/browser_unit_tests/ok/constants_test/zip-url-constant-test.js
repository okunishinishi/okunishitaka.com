/**
 * Test for zipUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('zipUrlConstant', function () {
    var zipUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['zipUrlConstant', function (injected) {
            zipUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(zipUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(zipUrlConstant).forEach(function (key) {
            expect(zipUrlConstant[key]).toBeDefined();
        });
    });
});