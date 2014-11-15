/**
 * @file Test for password_logic.js.
 * Runs with node unit.
 */

"use strict";

var passwordLogic = require('./../../app/logics/password_logic.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Password logic.'] = function (test) {
    var hash0 = passwordLogic.hash('foo', 'bar'),
        hash1 = passwordLogic.hash('foo', 'bar'),
        hash2 = passwordLogic.hash('foo', 'bazzzzz');
    test.equal(hash0, hash1);
    test.notEqual(hash0, hash2);
    test.done();
};

exports['Create new salt.'] = function (test) {
    test.ok(passwordLogic.newSalt());
    test.notEqual(passwordLogic.newSalt(), passwordLogic.newSalt());
    test.done();
}