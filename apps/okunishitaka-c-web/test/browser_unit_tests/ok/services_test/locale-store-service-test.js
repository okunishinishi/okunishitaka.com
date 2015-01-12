/**
 * Test for localeStore
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('localeStoreService', function () {
    var localeStoreService;
    beforeEach(function () {
        mock.module('ok.services');
        inject(['localeStoreService', function (injected) {
            localeStoreService= injected;
        }]);
    });

    it('Inject the service.', function () {
        expect(localeStoreService).toBeDefined();
    });
});