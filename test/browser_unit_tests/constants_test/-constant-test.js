/**
 * Test for 
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('Constant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a service.', inject(function (Constant) {
        expect(Constant).toBeDefined();
    }));
});