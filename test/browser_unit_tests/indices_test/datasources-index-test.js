/**
 * Test for datasources
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('datasourcesIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (datasourcesIndex) {
        expect(datasourcesIndex).toBeDefined();
        Object.keys(datasourcesIndex).forEach(function(key){
            expect(datasourcesIndex[key]).toBeDefined();
        });
    }));
});