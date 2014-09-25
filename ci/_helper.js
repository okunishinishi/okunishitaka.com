#!/usr/bin/env

/**
 * @file Helper for ci.
 */

"use strict";

var u = require('apeman-util'),
    file = u.file,
    TaskHelper = u.tasking.TaskHelper,
    async = u.ext.async,
    glob = u.ext.glob,
    dateformat = require('dateformat'),
    fs = u.core.fs,
    copy = u.object.copy;

var h = new TaskHelper(__dirname + '/..');

h.tasks = {};
copy(require('apeman-tasks'), h.tasks);
copy(require('./tasks'), h.tasks);
h.copyDir = require('../app/util/copy_dir');
h.dateformat = dateformat;
h.fs = u.core.fs;
h.path = u.core.path;
h.filtering = u.filtering;
h.mapping = u.mapping;
h.sorting = u.sorting;
h.rmdirRecursive = file.rmdirRecursive;
h.yesno = u.ext.yesno;
h.pkg = require('../package.json')

h.watchAll = file.watchAll;

h.writeJsonFile = u.json.writeJsonFile;
h.readJsonFile = u.json.readJsonFile;
h.eachFiles = function (filenames, handler, done) {
    async.waterfall([
        function (callback) {
            glob(filenames, callback);
        },
        function (filenames, callback) {
            async.each(filenames, function (filename, callback) {
                handler(filename, callback);
            }, callback);
        }
    ], done);
}

h.loadHtmlFile = function (filename, callback) {
    var cheerio = require('cheerio');
    async.waterfall([
        function (callback) {
            fs.readFile(filename, callback);
        },
        function (buffer, callback) {
            var $ = cheerio.load(buffer.toString(), {
                decodeEntities: false,
                xmlMode: false
            });
            callback(null, $);
        }
    ], callback);
}

module.exports = h;

