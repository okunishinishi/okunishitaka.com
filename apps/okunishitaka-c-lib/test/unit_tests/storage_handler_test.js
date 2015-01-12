/**
 * @file Test for storage_handler.js.
 * Runs with node unit.
 */

"use strict";

var StorageHandler = require('./../../lib/handlers/storage_handler.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Storage handler.'] = function (test) {
    test.ok(new StorageHandler({}));
    test.done();
};