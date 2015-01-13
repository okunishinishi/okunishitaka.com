/**
 * Test for okCover
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('okCover directive.', function () {
    var $compile, $rootScope;

    beforeEach(function () {
        mock.module('ok.directives');
        inject(function (_$compile_, _$rootScope_, $httpBackend) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $httpBackend.when('GET', '/html/partials/cover.html')
                .respond('<span></span>');
        });
    });

    it('Render the directive.', function () {
        var elm = $compile('<div ok:cover></div>')($rootScope);
        $rootScope.$digest();
        expect(elm).toBeDefined();
    });
});