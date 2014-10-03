/**
 * App module for {@link http://okunishitaka.com|okunishitaka.com}.
 * @module okunishitaka-dot-com/app
 */

"use strict";

var web = require('apeman-web'),
    u = require('apeman-util'),
    childProcess = u.core.childProcess,
    async = web.ext.async,
    mw = web.middlewares,
    connect = web.ext.connect,
    storages = require('./app_storages'),
    prerenderMiddleware = require('./middlewares/prerender_middleware');

/** @lends module:okunishitaka-dot-com/app */
var app = {};

/**
 * Start the app.
 * @param {number} port - Server port number.
 * @param {object} settings - App settings.
 * @param {string} settings.basedir - App base directory path.
 * @param {string} settings.settings - Data directory path.
 * @param {string} settings.prerenderCacheDir - Directory path to save prerender cache.
 * @param {string} settings.accessLogFile - Access log file path.
 * @param {string} settings.errorLogFile - Error log file path.
 * @param {function} callback - Callback when done.
 */
app.start = function (port, settings, callback) {
    var isDevelopment = process.env.NODE_ENV === 'development';

    process.chdir(settings.basedir);

    async.series([
        function (callback) {
            var clean = require.resolve('./bin/clean');
            childProcess.fork(clean).on('exit', callback);
        },
        function (callback) {
            storages.connect(settings.dataDir, callback);
        },
        function (callback) {
            var server = connect()
                .use(function (req, res, next) {
                    next();
                })
                .use(prerenderMiddleware({
                    cacheDirectory: settings.prerenderCacheDir,
                    baseUrl: [
                        ['http://localhost', port].join(':')
                    ]
                }))
                .use(mw.serveStaticMiddleware({
                    root: settings.publicDir,
                    extensions: ['html', 'htm', 'json']
                }))
                .use(mw.extendReqMiddleware({
                    getQuery: web.extensions.reqGetQuery(),
                    parseForm: web.extensions.reqParseForm()
                }))
                .use(mw.extendResMiddleware({
                    sendJson: web.extensions.resSendJson({
                        //ブラウザで文字化けするのでUTF-8を明示的に指定している
                        contentType: 'application/json; charset=UTF-8;'
                    }),
                    sendRedirect: web.extensions.resSendRedirect()
                }))
                .use(function (req, res, next) {
                    req.query = req.getQuery();
                    next();
                })
                .use(function (req, res, next) {
                    req.parseForm(function (err, body) {
                        req.body = body;
                        next(err);
                    });
                })
                .use(mw.logDevMiddleware({
                    enabled: isDevelopment
                }))
                .use(mw.logAccessMiddleware({
                    filename: settings.accessLogFile
                }))
                .use(mw.selectRouteMiddleware({
                    paramsName: 'params',
                    routes: require('./app_endpoints')
                }))
                .use(mw.logErrorMiddleware({
                    filename: settings.errorLogFile,
                    console: isDevelopment
                }))
                .use(mw.sendServerErrorMiddleware({

                }))
                .listen(port, function () {

                    /**
                     * Close the app.
                     * @function
                     * @param {function} [callback] - Callback when done.
                     */
                    app.close = server.close.bind(server);
                    callback(null, app);
                });
        }
    ], function (err) {
        if (err) {
            console.error(err);
        }
        callback(app);
    });
};

module.exports = app;