/**
 * @file Test for schema_interceptor.js.
 * Runs with node unit.
 */

"use strict";

var SchemaInterceptor = require('./../../app/routes/interceptors/schema_interceptor.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Schema interceptor.'] = function (test) {
    var interceptor = new SchemaInterceptor({});
    test.ok(interceptor);
    test.done();
};