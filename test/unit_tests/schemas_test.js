/**
 * @file Test for schemas.js.
 * Runs with node unit.
 */

"use strict";

var schemas = require('./../../app/schemas/schemas.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Schemas.'] = function (test) {
    Object.keys(schemas).forEach(function (key) {
        test.ok(schemas[key]);
    });
    test.done();
};