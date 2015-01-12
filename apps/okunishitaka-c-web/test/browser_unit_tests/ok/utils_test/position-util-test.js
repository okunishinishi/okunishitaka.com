/**
* Test for position
* Runs with karma.
*/

"use strict";

var ng = angular,
mock = ng.mock;

describe('positionUtil', function () {
    var positionUtil;
    beforeEach(function () {
        mock.module('ok.utils');
        inject(['positionUtil', function (injected) {
            positionUtil= injected;
        }]);
    });

    it('Inject the util.', function () {
        expect(positionUtil).toBeDefined();
    });

});