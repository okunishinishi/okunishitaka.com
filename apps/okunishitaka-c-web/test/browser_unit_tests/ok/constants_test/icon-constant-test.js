/**
 * Test for icon
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('iconConstant', function () {
    var iconConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['iconConstant', function (injected) {
            iconConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(iconConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(iconConstant).forEach(function (key) {
            expect(iconConstant[key]).toBeDefined();
        });
    });
});