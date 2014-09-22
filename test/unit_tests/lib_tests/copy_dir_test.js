/**
 * @file Test for copy_dir.js.
 * Runs with node unit.
 */

"use strict";

var copyDir = require('./../../../lib/util/copy_dir.js'),
    fs = require('fs'),
    u = require('apeman-util'),
    mkdirp = u.ext.mkdirp,
    h = require('../../_helper');

exports.setUp = function (done) {
    // h.injector.inject(console, 'log', h.doNothing);
    done();
};

exports.tearDown = function (done) {
    h.injector.restoreAllInjected();
    done();
};

exports['Copy dir.'] = function (test) {
    var workDir = h.resolveWorkFile('work_copy_dir');
    mkdirp.sync(workDir);
    mkdirp.sync(workDir + '/src/foo/bar');
    fs.writeFileSync(workDir + '/src/foo/bar/quz.txt');
    mkdirp.sync(workDir + '/dest');
    copyDir(workDir + '/src', workDir + '/dest', function (err) {
        test.ifError(err);
        test.done();
    });
};