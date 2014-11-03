/**
 * Test for tagColor
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('tagColorLogic', function () {

    beforeEach(mock.module('ok.logics'));
    it('Inject the logic.', inject(function (tagColorLogic) {
        expect(tagColorLogic).toBeDefined();
    }));

    it('Get color.', inject(function (tagColorLogic) {
        expect(tagColorLogic.tagColor('foo')).toBeDefined();
        expect(tagColorLogic.tagColor('bar')).toBeDefined();
    }));
});