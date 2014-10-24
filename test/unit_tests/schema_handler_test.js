/**
 * @file Test for schema_handler.js.
 * Runs with node unit.
 */

"use strict";

var SchemaHandler = require('./../../app/routes/handlers/schema_handler.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Schema handler.'] = function (test) {
    var handler = new SchemaHandler({});
    test.ok(handler);
    test.done();
};