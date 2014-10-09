/**
 * Test for position utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('positionutil', function () {

    beforeEach(mock.module('ok.utils'));

    it('Inject a util', inject(function (positionUtil) {
        expect(positionUtil).toBeDefined();
    }));

    it('Get offset sum', inject(function (positionUtil) {
        expect(positionUtil.offsetSum(document.body)).toBeDefined();
    }));
});