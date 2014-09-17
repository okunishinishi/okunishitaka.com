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
    childProcess.execFile(filename, args, function (err, stdErr, stdOut) {
        if (stdErr) {
            console.error(stdErr);
        }
        if (stdOut) {
            console.log(stdOut);
        }
        callback(err);
    });
};

module.exports = execPhantomScript;
