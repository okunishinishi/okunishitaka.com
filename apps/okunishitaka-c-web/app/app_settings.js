/**
 * App settings.
 * @module okunishitaka-c-web/app/appSettings
 */

"use strict";

var u = require('apeman-util'),
    server = require('../../../server.json'),
    path = u.core.path;


var basedir = path.resolve(__dirname, '..'),
    resolve = function (pathname) {
        return path.resolve(basedir, pathname);
    };


var appSettings = Object.seal(
    /** @lends module:okunishitaka-c/app/appSettings */
    {
        /**
         * Base directory path.
         * @type {string}
         */
        basedir: basedir,
        publicDir: resolve('public'),
        /**
         * Access log file path.
         * @type {string}
         */
        accessLogFile: path.join(basedir, '../../', server.log.app.access),
        /**
         * Error log file path.
         * @type {string}
         */
        errorLogFile: path.join(basedir, '../../', server.log.app.error),
        /**
         * Supported langs.
         * @type {string[]}
         */
        supportedLangs: ['ja'],

        /**
         * Session secret value.
         */
        sessionSecret: 'adr3asd',

        get db() {
            var config = require('../../.db.json'),
                database = config.databases.production,
                user = config.users.web;
            return {
                schema: database.schema,
                port: database.port,
                host: database.host,
                user: user
            }
        }

    }
);

module.exports = appSettings;