/**
 * @file CI tasks.
 * @module okunishitaka-c-lib/ci/tasks
 */

"use strict";

module.exports = {
    get MysqlTask() { return require('./mysql_task'); }
};