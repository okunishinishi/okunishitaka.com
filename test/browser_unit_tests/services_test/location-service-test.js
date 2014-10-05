/**
 * Test for location
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (locationService) {
        expect(locationService).toBeDefined();
    }));
});