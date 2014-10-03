/**
 * @file Middleware functions.
 * @module okunishitaka-dot-com/app/middlewares
 */

"use strict";

module.exports = {
    get prerenderMiddleware() { return require('./prerender_middleware'); }
};