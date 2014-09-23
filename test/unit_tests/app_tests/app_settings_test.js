/**
 * @file Test for app_settings.js.
 * Runs with node unit.
 */

"use strict";

var appSettings = require('./../../../app/app_settings.js'),
    h = require('../../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['App settings.'] = function (test) {
    Object.keys(appSettings).forEach(function (key) {
        var value = appSettings[key];
        test.ok(value);
    })
    test.done();
};