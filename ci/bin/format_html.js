#!/usr/bin/env node

/**
 * @file Format html files.
 */

"use strict";


var h = require('../_helper'),
    async = h.async,
    fs = h.fs,
    tasks = h.tasks,
    config = require('../configs').formatConfig,
    updateQueryInUrl = require('../../app/util/update_query_in_url');

process.chdir(h.basedir);


async
    .each([].concat(config.html.files), function (pattern, callback) {
        h.eachFiles(pattern, function (filename, callback) {
            async.waterfall([
                function (callback) {
                    h.loadHtmlFile(filename, callback);
                },
                function ($, callback) {
                    config.html.versioning.forEach(function (config) {
                        var tagName = config.tag, attrName = config.attr;
                        $(tagName).each(function () {
                            var elm = $(this),
                                value = elm.attr(attrName);
                            if (!value) {
                                return;
                            }
                            var newValue = updateQueryInUrl(value, {
                                v: h.pkg.version
                            });
                            elm.attr(attrName, newValue);
                        });
                    });
                    callback(null, $.html());
                },
                function (html, callback) {
                    async.series([
                        function (callback) {
                            fs.writeFile(filename, html, callback);
                        },
                        function (callback) {
                            console.log('File rewrited:', filename);
                            callback(null);
                        }
                    ], callback);
                }
            ], callback);
        }, callback);
    }, h.done('Format html done.'));