/**
 * Task to execute mysql.
 * @memberof kaite-lib/ci/tasks
 * @constructor MysqlTask
 * @param {object} config - Task configuration.
 * @param {function} callback - Callback when done.
 * @author Taka Okunishi
 */

"use strict";

var u = require('apeman-util'),
    Task = require('apeman-tasks/lib/task'),
    fs = u.core.fs,
    async = u.ext.async,
    mysql = require('apeman-storage/lib/ext').mysql,
    JsonSchema = Task.JsonSchema;

module.exports = Task.define(
    /** @lends MysqlTask.prototype */
    {
        name: 'mysql',
        schema: new JsonSchema({}),
        /**
         * Execute a task.
         * @param {object} config - Task configuration.
         * @param {object} config.db - Data base to connect.
         * @param {string} config.db.host - Port hostname.
         * @param {number} config.db.port - Port number.
         * @param {string || string[]} config.filename - SQL file name.
         * @param {function} callback - Callback when done.
         */
        execute: function (config, callback) {
            var db = config.db || {},
                filenames = [].concat(config.filename || []),
                queries = [].concat(config.queries || []),
                user = config.user || {},
                connection = mysql
                    .createConnection({
                        //debug: true,
                        multipleStatements: true,
                        port: db.port,
                        host: db.host,
                        user: user.username,
                        password: user.password
                    });
            async.series([
                function (callback) {
                    connection.connect(callback);
                },
                function (callback) {
                    async.eachSeries(filenames, function (filename, callback) {
                        async.waterfall([
                            function (callback) {
                                fs.readFile(filename, callback);
                            },
                            function (sql, callback) {
                                connection.query(String(sql), callback);
                            }
                        ], callback);
                    }, callback);
                },
                function (callback) {
                    async.eachSeries(queries, function (query, callback) {
                        connection.query(String(query), callback);
                    }, callback);
                }
            ], callback);
        }
    }
);