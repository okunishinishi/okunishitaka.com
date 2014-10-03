/**
 * @file Test for http_status.js.
 * Runs with node unit.
 */

"use strict";

var httpStatus = require('./../../app/codes/http_status_codes.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Http status.'] = function (test) {
    test.ok(httpStatus);
    test.done();
};