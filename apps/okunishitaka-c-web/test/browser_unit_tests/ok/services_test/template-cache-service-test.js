/**
 * Test for templateCache
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('templateCacheService', function () {
    var templateCacheService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['templateCacheService', function (injected) {
            templateCacheService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(templateCacheService).toBeDefined();
    });
});