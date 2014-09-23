/**
 * @file Test for exec_phantom_script.js.
 * Runs with node unit.
 */

"use strict";

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Exec phantom script.'] = function (test) {
    var bin = require.resolve('./../../app/util/exec_phantom_script.js');
    test.ok(bin);
    test.done();
};