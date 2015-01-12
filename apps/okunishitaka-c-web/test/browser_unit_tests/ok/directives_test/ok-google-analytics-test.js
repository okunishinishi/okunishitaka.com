/**
 * Test for okGoogleAnalytics
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('okGoogleAnalytics directive.', function () {
    var $compile, $rootScope;

    beforeEach(function () {
        mock.module('ok.directives');
        inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('Render the directive.', function () {
        var elm = $compile('<div ok:google-analytics></div>')($rootScope);
        $rootScope.$digest();
        expect(elm).toBeDefined();
    });
});