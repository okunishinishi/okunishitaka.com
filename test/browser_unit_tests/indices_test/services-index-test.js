/**
 * Test for services
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('servicesIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (servicesIndex) {
        expect(servicesIndex).toBeDefined();
        Object.keys(servicesIndex).forEach(function(key){
            expect(servicesIndex[key]).toBeDefined();
        });
    }));
});