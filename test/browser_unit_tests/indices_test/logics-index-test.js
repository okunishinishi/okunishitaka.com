/**
 * Test for logics
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('logicsIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (logicsIndex) {
        expect(logicsIndex).toBeDefined();
        Object.keys(logicsIndex).forEach(function(key){
            expect(logicsIndex[key]).toBeDefined();
        });

    }));
});