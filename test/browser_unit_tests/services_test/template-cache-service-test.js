/**
 * Test for templateCache
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('templateCacheService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (templateCacheService) {
        expect(templateCacheService).toBeDefined();
    }));

    it('Register tempalte', inject(function (templateCacheService) {
        templateCacheService.register('foo', '<h1>This is foo.</h1>');
    }));
});