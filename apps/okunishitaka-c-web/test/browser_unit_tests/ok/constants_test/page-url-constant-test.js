/**
 * Test for pageUrl
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('pageUrlConstant', function () {
    var pageUrlConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['pageUrlConstant', function (injected) {
            pageUrlConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(pageUrlConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(pageUrlConstant).forEach(function (key) {
            expect(pageUrlConstant[key]).toBeDefined();
        });
    });
});