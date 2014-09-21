/**
 * App module
 * @memberof okunishitaka.com/app
 * @module app
 */

"use strict";

var h = require('./_helper'),
    clean = require('./_clean'),
    web = h.web,
    async = web.ext.async,
    mw = web.middlewares,
    connect = web.ext.connect,
    storages = require('./app_storages'),
    prerenderMiddleware = require('./middlewares/prerender_middleware');

var isDevelopment = process.env.NODE_ENV === 'development';

var app = module.exports;
app.start = function (port, settings, callback) {

    process.chdir(settings.basedir);

    async.series([
        function (callback) {
            clean(settings, callback);
        },
        function (callback) {
            storages.connect(settings.dataDir, callback);
        },
        function (callback) {
            var app = connect()
                .use(function (req, res, next) {
                    next();
                })
                .use(prerenderMiddleware({
                    cacheDirectory: settings.prerenderCacheDir
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
                    sendJson: web.extensions.resSendJson(),
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
                    routes: require('./app_routes')
                }))
                .use(mw.logErrorMiddleware({
                    filename: settings.errorLogFile,
                    console: isDevelopment
                }))
                .use(mw.sendServerErrorMiddleware({

                }));


            app.listen(port, function () {
                callback.call(app);
            });
        }
    ], function (err) {
        callback(err);
    });
};