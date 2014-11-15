/**
 * @file Test for password_hash_logic.js.
 * Runs with node unit.
 */

"use strict";

var passwordHashLogic = require('./../../app/logics/password_hash_logic.js'),
    h = require('../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};
exports['Password hash logic.'] = function (test) {
    var hash0 = passwordHashLogic.hash('foo', 'bar'),
        hash1 = passwordHashLogic.hash('foo', 'bar'),
        hash2 = passwordHashLogic.hash('foo', 'bazzzzz');
    test.equal(hash0, hash1);
    test.notEqual(hash0, hash2);
    test.done();
};

exports['Create new salt.'] = function (test) {
    test.ok(passwordHashLogic.newSalt());
    test.notEqual(passwordHashLogic.newSalt(), passwordHashLogic.newSalt());
    test.done();
}