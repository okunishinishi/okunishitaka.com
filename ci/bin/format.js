#!/usr/bin/env node

/**
 * @file Format files.
 */

"use strict";

var h = require('../_helper'),
    async = h.async,
    tasks = h.tasks;

process.chdir(h.basedir);

new tasks.ForkTask({
    files: [
        'ci/bin/format_html',
    ]
}).run(h.done('Doc done!'));