/**
 * Test for ok-page.js
 * Runs with karma.
 */

"use strict";

var ng = angular,
    mock = ng.mock;

describe('ok-page', function () {
    var $scope;

    beforeEach(mock.module('ok.page'));
    beforeEach(mock.inject(function ($injector) {
        $scope = $injector.get('$rootScope');
    }));

    it('Resolve url.', function () {
        expect($scope.url('foo')).toBeDefined();
        expect($scope.url('/foo')).toBeDefined();
    });

});
