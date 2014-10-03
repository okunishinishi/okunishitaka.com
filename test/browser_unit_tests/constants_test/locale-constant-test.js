/**
 * Test for locale
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('localeConstant', function () {
    beforeEach(mock.module('ok.constants'));
    it('Inject a constant.', inject(function (localeConstant) {
        expect(localeConstant).toBeDefined();
    }));
});