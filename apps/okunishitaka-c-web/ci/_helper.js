#!/usr/bin/env

/**
 * @file Helper for ci.
 * @private
 */

"use strict";

var u = require('apeman-util'),
    file = u.file,
    TaskHelper = u.tasking.TaskHelper;

var h = new TaskHelper(__dirname + '/..');
h.tasks = require('apeman-tasks');

module.exports = h;

