/**
 * Test for confirmMessage
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('confirmMessageService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (confirmMessageService) {
        expect(confirmMessageService).toBeDefined();
    }));
});