/**
 * Test for constants
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('constantsIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (constantsIndex) {
        expect(constantsIndex).toBeDefined();
        Object.keys(constantsIndex).forEach(function(key){
            expect(constantsIndex[key]).toBeDefined();
        });
    }));
});