/**
 * Test for locationSearch
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationSearchService', function () {
    var locationSearchService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['locationSearchService', function (injected) {
            locationSearchService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(locationSearchService).toBeDefined();
    });
});