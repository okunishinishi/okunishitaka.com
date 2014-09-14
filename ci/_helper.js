#!/usr/bin/env

/**
 * @file Helper for ci.
 */

"use strict";

var u = require('apeman-util'),
    TaskHelper = u.tasking.TaskHelper,
    tasks = require('apeman-tasks');

var h = new TaskHelper(__dirname + '/..');
h.tasks = tasks;

module.exports = h;
