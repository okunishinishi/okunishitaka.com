/**
 * Test for view
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('viewConstant', function () {
    var viewConstant;
    beforeEach(function () {
        mock.module('ok.constants');
        inject(['viewConstant', function (injected) {
            viewConstant = injected;
        }]);
    });

    it('Inject the constant.', function () {
        expect(viewConstant).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(viewConstant).forEach(function (key) {
            expect(viewConstant[key]).toBeDefined();
        });
    });
});