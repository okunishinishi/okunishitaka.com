/**
 * @file Test for unique_handler.js.
 * Runs with node unit.
 */

"use strict";

var UniqueHandler = require('./../../lib/handlers/unique_handler.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Unique handler.'] = function (test) {
    test.ok(new UniqueHandler({}));
    test.done();
};