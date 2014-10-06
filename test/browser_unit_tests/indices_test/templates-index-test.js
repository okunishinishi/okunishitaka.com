/**
 * Test for templates
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('templatesIndex', function () {

    beforeEach(mock.module('ok.indices'));
    it('Inject the index.', inject(function (templatesIndex) {
        expect(templatesIndex).toBeDefined();
        Object.keys(templatesIndex).forEach(function (key) {
            expect(templatesIndex[key]).toBeDefined();
        });
    }));
});