/**
 * App module
 * @memberof okunishitaka.com/app
 * @module app
 */

"use strict";

var h = require('./_helper'),
    clean = require('./_clean'),
    web = h.web,
    mw = web.middlewares,
    connect = web.ext.connect,
    prerenderMiddleware = require('./middlewares/prerender_middleware');

var isDevelopment = process.env.NODE_ENV === 'development';

var app = module.exports;
app.start = function (port, settings, callback) {

    process.chdir(settings.basedir);

    clean(settings, function () {


        var dataDir = settings.dataDir,
            accessLogFile = settings.accessLogFile,
            errorLogFile = settings.errorLogFile,
            prerenderCacheDir = settings.prerenderCacheDir;

        var app = connect()
            .use(function (req, res, next) {
                next();
            })
            .use(prerenderMiddleware({
                cacheDirectory: prerenderCacheDir
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
                filename: accessLogFile
            }))
            .use(mw.selectRouteMiddleware({
                paramsName: 'params',
                routes: require('./app_routes')
            }))
            .use(mw.logErrorMiddleware({
                filename: errorLogFile,
                console: isDevelopment
            }))
            .use(mw.sendServerErrorMiddleware({

            }));


        app.listen(port, function () {
            if (callback) {
                callback.call(app);
            }
        });
    });
};