/**
 * Test for okScrollToStay
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('okScrollToStay directive.', function () {
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
        var elm = $compile('<div ok:scroll-to-stay></div>')($rootScope);
        $rootScope.$digest();
        expect(elm).toBeDefined();
    });
});