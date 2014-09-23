/**
 * @file Test for app.js.
 * Runs with node unit.
 */

"use strict";

var app = require('./../../app/app.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App.'] = function (test) {
    test.ok(app);
    test.ok(app.start);
    test.done();
};