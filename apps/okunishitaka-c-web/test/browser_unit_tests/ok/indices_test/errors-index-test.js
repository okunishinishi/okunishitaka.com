/**
 * Test for errors
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('errorsIndex', function () {
    var errorsIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        inject(['errorsIndex', function (injected) {
            errorsIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(errorsIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(errorsIndex).forEach(function (key) {
            expect(errorsIndex[key]).toBeDefined();
        });
    });
});