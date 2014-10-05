/**
 * Test for errors
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('errorsIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (errorsIndex) {
        expect(errorsIndex).toBeDefined();
        Object.keys(errorsIndex).forEach(function(key){
            expect(errorsIndex[key]).toBeDefined();
        });
    }));
});