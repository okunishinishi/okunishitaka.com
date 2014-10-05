/**
 * Test for app
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('appConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (appConstant) {
        expect(appConstant).toBeDefined();
    }));
});