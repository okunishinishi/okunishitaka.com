#!/usr/bin/env

/**
 * @file Helper for ci.
 */

"use strict";

var u = require('apeman-util'),
    file = u.file,
    TaskHelper = u.tasking.TaskHelper,
    dateformat = require('dateformat'),
    copy = u.object.copy;

var h = new TaskHelper(__dirname + '/..');

h.tasks = {};
copy(require('apeman-tasks'), h.tasks);
copy(require('./tasks'), h.tasks);
h.copyDir = require('../lib/util/copy_dir');
h.dateformat = dateformat;
h.fs = u.core.fs;
h.path = u.core.path;
h.filtering = u.filtering;
h.mapping = u.mapping;
h.sorting = u.sorting;
h.rmdirRecursive = file.rmdirRecursive;
h.yesno = u.ext.yesno;
module.exports = h;

