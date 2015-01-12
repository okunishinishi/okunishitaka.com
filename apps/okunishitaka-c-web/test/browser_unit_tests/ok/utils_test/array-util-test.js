/**
* Test for array
* Runs with karma.
*/

"use strict";

var ng = angular,
mock = ng.mock;

describe('arrayUtil', function () {
    var arrayUtil;
    beforeEach(function () {
        mock.module('ok.utils');
        inject(['arrayUtil', function (injected) {
            arrayUtil= injected;
        }]);
    });

    it('Inject the util.', function () {
        expect(arrayUtil).toBeDefined();
    });

});