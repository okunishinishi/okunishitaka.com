/**
 * Test for templates
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('templatesIndex', function () {
    var templatesIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        inject(['templatesIndex', function (injected) {
            templatesIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(templatesIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(templatesIndex).forEach(function (key) {
            expect(templatesIndex[key]).toBeDefined();
        });
    });
});