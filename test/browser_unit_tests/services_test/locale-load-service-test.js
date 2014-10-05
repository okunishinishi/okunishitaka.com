/**
 * Test for localeLoad
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('localeLoadService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (localeLoadService) {
        expect(localeLoadService).toBeDefined();
    }));

    it('Get locale for a lang.', inject(function (localeLoadService) {
        var l = localeLoadService.localeForLang('en');
        expect(l).toBeDefined();
    }));
});