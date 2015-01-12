/**
 * Test for partialUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('partialUrlConstant', function () {
    var partialUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['partialUrlConstant', function (injected) {
            partialUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(partialUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(partialUrlConstant).forEach(function (key) {
            expect(partialUrlConstant[key]).toBeDefined();
        });
    });
});