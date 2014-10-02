/**
 * Test for one data source.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('Onedatasource', function () {

    beforeEach(mock.module('ok.datasources'));

    it('Initalize a data source', inject(function (OneDatasource) {
        var datasource = new OneDatasource({});
        expect(datasource).toBeDefined();
    }));

});