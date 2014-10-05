/**
 * Test for locationResolve
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationResolveService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (locationResolveService) {
        expect(locationResolveService).toBeDefined();
    }));

    it('Resolve a url.', inject(function (locationResolveService) {
        expect(locationResolveService.baseUrl).toBeDefined();
        expect(locationResolveService.resolveUrl(null)).toBe(null);
        expect(locationResolveService.resolveUrl(undefined)).toBe(undefined);
        expect(locationResolveService.resolveUrl('/foo')).toBeDefined();
        expect(locationResolveService.resolveUrl('foo')).toBeDefined();
    }));
});