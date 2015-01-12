/**
 * Test for utils
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('utilsIndex', function () {
    var utilsIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        inject(['utilsIndex', function (injected) {
            utilsIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(utilsIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(utilsIndex).forEach(function (key) {
            expect(utilsIndex[key]).toBeDefined();
        });
    });
});