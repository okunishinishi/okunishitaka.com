/**
 * Test for apiUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('apiUrlConstant', function () {
    var apiUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['apiUrlConstant', function (injected) {
            apiUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(apiUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(apiUrlConstant).forEach(function (key) {
            expect(apiUrlConstant[key]).toBeDefined();
        });
    });
});