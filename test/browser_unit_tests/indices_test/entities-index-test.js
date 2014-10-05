/**
 * Test for entities
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('entitiesIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (entitiesIndex) {
        expect(entitiesIndex).toBeDefined();
        Object.keys(entitiesIndex).forEach(function(key){
            expect(entitiesIndex[key]).toBeDefined();
        });
    }));
});