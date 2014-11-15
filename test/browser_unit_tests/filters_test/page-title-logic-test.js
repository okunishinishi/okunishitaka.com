/**
 * Test for pageTitle
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('pageTitleLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (pageTitleLogic) {
        expect(pageTitleLogic).toBeDefined();
    }));
});