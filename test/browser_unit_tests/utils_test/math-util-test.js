/**
 * Test for math utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('mathutil', function () {

    beforeEach(mock.module('ok.utils'));

    it('Inject a util', inject(function (mathUtil) {
        expect(mathUtil).toBeDefined();
    }));

    it('Get random int', inject(function (mathUtil) {
        expect(mathUtil.randomInt()).toBeDefined();
    }));

});