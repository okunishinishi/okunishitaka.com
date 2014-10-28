/**
 * Test for textLink
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('textLinkLogic', function () {

    beforeEach(mock.module('ok.logics'));

    it('Inject the logic.', inject(function (textLinkLogic) {
        expect(textLinkLogic).toBeDefined();
    }));

    it('Convert to linked html.', inject(function (textLinkLogic) {
        expect(textLinkLogic.toLinkedHtml('Foo Bar Baz', {
            Bar: 'ABOUT_MARK_DOWN'
        })).toBeDefined();
    }));
});