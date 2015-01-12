/**
 * Test for entities
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('entitiesIndex', function () {
    var entitiesIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        inject(['entitiesIndex', function (injected) {
            entitiesIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(entitiesIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(entitiesIndex).forEach(function (key) {
            expect(entitiesIndex[key]).toBeDefined();
        });
    });
});