/**
 * Test for list data source.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('Listdatasource', function () {

    beforeEach(mock.module('ok.datasources'));

    it('Initalize a data source', inject(function (ListDatasource) {
        var datasource = new ListDatasource({});
        expect(datasource).toBeDefined();
    }));

    it('Define a data source.', inject(function (ListDatasource) {
        var Deifned = ListDatasource.define({
            foo: 'bar'
        });
        expect(Deifned).toBeDefined();
        expect(Deifned.prototype.foo).toEqual('bar');

        var instantiated = new Deifned({});
        expect(instantiated.foo).toEqual('bar');
    }))

});