/**
 * Test for services
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('servicesIndex', function () {
    var servicesIndex;
    beforeEach(function () {
        mock.module('ok.indices');
        mock.module(function ($provide) {
            $provide.value('l', {});
        });
        inject(['servicesIndex', function (injected) {
            servicesIndex = injected;
        }]);
    });

    it('Inject the index.', function () {
        expect(servicesIndex).toBeDefined();
    });

    it('Eval each properties', function () {
        Object.keys(servicesIndex).forEach(function (key) {
            expect(servicesIndex[key]).toBeDefined();
        });
    });
});