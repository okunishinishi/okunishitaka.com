/**
 * @file Lib for okunishitaka.com.
 * @module okunishitaka-c-lib/lib
 */

"use strict";

module.exports = {
    get codes() { return require('./codes'); },
    get handlers() { return require('./handlers'); },
    get logics() { return require('./logics'); },
    get middlewares() { return require('./middlewares'); },
    get models() { return require('./models'); },
    get utils() { return require('./utils'); }
};