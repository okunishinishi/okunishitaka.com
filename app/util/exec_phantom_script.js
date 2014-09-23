/**
 * Execute a phantomjs script.
 * @function execPhantomScript
 * @param {string} filename - Script file name to execute.
 * @param {string[]} args - Args.
 * @param {callback} callback - Callback when done.
 * @author Taka Okunishi
 */

"use strict";

var u = require('apeman-util'),
    childProcess = u.core.childProcess;

/** @lends execPhantomScript */
function execPhantomScript(filename, args, callback) {
    var phantomjs;
    try {
        phantomjs = require('phantomjs');
    } catch (e) {
        console.error('phantomjs is required. try `npm install phantomjs`.');
        throw e;
    }
    args = [].concat(filename).concat(args);
    var spawned = childProcess.spawn(phantomjs.path, args);
    spawned.stdout.pipe(process.stdout);
    spawned.stderr.pipe(process.stderr);
    spawned.on('exit', function () {
        callback();
    });
};

module.exports = execPhantomScript;
