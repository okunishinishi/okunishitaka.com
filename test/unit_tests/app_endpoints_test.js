/**
 * @file Test for app_endpoints.js.
 * Runs with node unit.
 */

"use strict";

var appEndpoints = require('./../../app/app_endpoints.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App endpoints.'] = function (test) {
    test.ifError(new Error('Not implemented!'));
    test.done();
};