#!/usr/bin/env

/**
 * @file Helper for ci.
 */

"use strict";

var u = require('apeman-util'),
    TaskHelper = u.tasking.TaskHelper,
    copy = u.object.copy;

var h = new TaskHelper(__dirname + '/..');

h.tasks = {};
copy(require('apeman-tasks'), h.tasks);
copy(require('./tasks'), h.tasks);

module.exports = h;
