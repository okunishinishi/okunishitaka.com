/**
 * Test for locationChange
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('locationChangeService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (locationChangeService) {
        expect(locationChangeService).toBeDefined();
    }));

});