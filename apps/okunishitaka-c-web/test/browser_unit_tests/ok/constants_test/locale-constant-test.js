/**
 * Test for locale
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('localeConstant', function () {
    var localeConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['localeConstant', function (injected) {
            localeConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(localeConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(localeConstant).forEach(function (key) {
            expect(localeConstant[key]).toBeDefined();
        });
    });
});