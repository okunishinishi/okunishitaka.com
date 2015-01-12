/**
* Test for string
* Runs with karma.
*/

"use strict";

var ng = angular,
mock = ng.mock;

describe('stringUtil', function () {
    var stringUtil;
    beforeEach(function () {
        mock.module('ok.utils');
        inject(['stringUtil', function (injected) {
            stringUtil= injected;
        }]);
    });

    it('Inject the util.', function () {
        expect(stringUtil).toBeDefined();
    });

});