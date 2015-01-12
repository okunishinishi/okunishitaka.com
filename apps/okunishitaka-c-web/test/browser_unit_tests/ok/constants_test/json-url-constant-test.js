/**
 * Test for jsonUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('jsonUrlConstant', function () {
    var jsonUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['jsonUrlConstant', function (injected) {
            jsonUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(jsonUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(jsonUrlConstant).forEach(function (key) {
            expect(jsonUrlConstant[key]).toBeDefined();
        });
    });
});