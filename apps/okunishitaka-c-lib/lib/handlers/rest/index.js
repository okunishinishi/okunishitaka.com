/**
 * @file Rest route handlers.
 * @module okunishitaka-c-lib/lib/handlers/rest
 */

"use strict";

module.exports = {
    get CreateRestHandler() { return require('./create_rest_handler'); },
    get DestroyRestHandler() { return require('./destroy_rest_handler'); },
    get ListRestHandler() { return require('./list_rest_handler'); },
    get OneRestHandler() { return require('./one_rest_handler'); },
    get UpdateRestHandler() { return require('./update_rest_handler'); }
};