#!/usr/bin/env node

/**
 * Prerender web page with phantomjs.
 */

"use strict";

var args = process.argv,
    url = args[2],
    filename = args[3];

var page = require('webpage').create(),
    fs = require('fs');

page.open(url, function () {
    fs.writeFile(filename, page.content, function (err) {
        if (err) {
            console.error(err);
        }
        phantom.exit();
    });
});
