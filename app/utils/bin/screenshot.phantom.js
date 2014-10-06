#!/usr/bin/env node

/**
 * Prerender web page with phantomjs.
 */

"use strict";


var args = require('system').args,
    url = args[1],
    filename = args[2];

var page = require('webpage').create(),
    fs = require('fs');

page.open(url, function () {
    page.render(filename);
    phantom.exit();
});

