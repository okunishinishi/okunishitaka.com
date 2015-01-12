/**
 * Test for constants
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('constantsIndex', function () {
    var constantsIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        inject(['constantsIndex', function (injected) {
            constantsIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(constantsIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(constantsIndex).forEach(function (key) {
            expect(constantsIndex[key]).toBeDefined();
        });
    });
});