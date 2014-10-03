/**
 * @file Test for app_error_codes.js.
 * Runs with node unit.
 */

"use strict";

var appErrorCodes = require('./../../app/codes/app_error_codes.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App error codes.'] = function (test) {
    Object.keys(appErrorCodes).forEach(function (name) {
        test.ok(appErrorCodes[name]);
    });
    test.done();
};