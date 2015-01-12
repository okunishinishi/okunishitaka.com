/**
 * App module.
 * @module karakuri-g-web/app
 */

"use strict";

var web = require('apeman-web'),
    u = require('apeman-util'),
    lib = require('../../okunishitaka-c-lib/lib'),
    storages = require('./app_storages'),
    async = u.ext.async;

/** @lends karakuri-g-web/app */
var app = {};

/**
 * Start app.
 * @param {number} port - Server port number.
 * @param {object} settings - App settings.
 * @param {string} settings.basedir - App base directory path.
 * @param {function} callback - Callback when done.
 */
app.start = function startApp(port, settings, callback) {
    var mw = web.middlewares,
        NODE_ENV = process.env.NODE_ENV,
        isDevelopment = NODE_ENV === 'development',
        isTest = NODE_ENV === 'test';

    process.chdir(settings.basedir);


    async.series([
        function setupStorage(callback) {
            app._setupStorage(settings.db, callback);
        },
        function createServer(callback) {
            var server = app._newServer([
                mw.extendReqMiddleware({
                    getQuery: web.extensions.reqGetQuery(),
                    parseForm: web.extensions.reqParseForm()
                }),
                mw.extendResMiddleware({
                    sendJson: web.extensions.resSendJson({
                        //ブラウザで文字化けするのでUTF-8を明示的に指定している
                        contentType: 'application/json; charset=UTF-8;'
                    }),
                    sendRedirect: web.extensions.resSendRedirect({})
                }),
                mw.serveStaticMiddleware({
                    root: settings.publicDir,
                    extensions: ['html', 'htm', 'json']
                }),
                mw.delayMiddleware({
                    // Add delay when development.
                    delay: isDevelopment ? 500 : 0
                }),
                function setQuery(req, res, next) {
                    req.query = req.getQuery();
                    next();
                },
                function setBody(req, res, next) {
                    req.parseForm(function (err, body) {
                        req.body = body;
                        next(err);
                    });
                },
                mw.logDevMiddleware({
                    enabled: isDevelopment
                }),
                mw.logAccessMiddleware({
                    filename: settings.accessLogFile
                }),
                mw.selectRouteMiddleware({
                    paramsName: 'params',
                    routes: require('./app_endpoints')
                }),
                mw.logErrorMiddleware({
                    filename: settings.errorLogFile,
                    console: isDevelopment || isTest
                }),
                mw.sendServerErrorMiddleware({})
            ])
                .listen(port, function () {
                    if (server) {
                        app.close = server.close.bind(server);
                    }
                    callback(null, app);
                });
        }
    ], function (err) {
        if (err) {
            console.error(err);
        }
        callback && callback(app);
    });
};


/**
 * Create a new server.
 * @param {function} middlewares - Middleware functions.
 * @returns {object} - Node connect server.
 * @see {@link https://github.com/senchalabs/connect|connect}
 * @private
 */
app._newServer = function (middlewares) {
    var server = web.ext.connect();
    middlewares.forEach(function (middleare) {
        server.use(middleare);
    });
    return server;
};

/**
 * Set up storages.
 * @param {object} config - Database configuration.
 * @param {function} callback - Callback when done.
 * @private
 */
app._setupStorage = function (config, callback) {
    storages.connect(config, callback);
};

app.close = u.doNothing;

module.exports = app;