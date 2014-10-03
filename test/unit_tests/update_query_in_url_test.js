/**
 * @file Test for update_query_in_url.js.
 * Runs with node unit.
 */

"use strict";

var updateQueryInUrl = require('./../../app/utils/update_query_in_url.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Update query in url.'] = function (test) {
    var newURL = updateQueryInUrl('foo/bar?baz=quz&quzz=jjj', {
        baz: 'boo'
    });
    test.equal(newURL, 'foo/bar?baz=boo&quzz=jjj');
    test.done();
};