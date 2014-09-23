/**
 * @file Test for app_storages.js.
 * Runs with node unit.
 */

"use strict";

var appStorages = require('./../../app/app_storages.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App storages.'] = function (test) {
    test.ok(appStorages);
    test.done();
};