/**
 * Test for meta
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('metaConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (metaConstant) {
        expect(metaConstant).toBeDefined();
    }));
});