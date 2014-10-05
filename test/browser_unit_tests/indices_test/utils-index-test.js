/**
 * Test for utils
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('utilsIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (utilsIndex) {
        expect(utilsIndex).toBeDefined();
        Object.keys(utilsIndex).forEach(function(key){
            expect(utilsIndex[key]).toBeDefined();
        });
    }));
});