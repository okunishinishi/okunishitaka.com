/**
 * @file App rest handlers
 * @module okunishitaka-dot-com/app/routes/handlers/rest
 *
 * @property CreateRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.CreateRestHandler|CreateRestHandler module}.
 * @property DestroyRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.DestroyRestHandler|DestroyRestHandler module}.
 * @property ListRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.ListRestHandler|ListRestHandler module}.
 * @property OneRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.OneRestHandler|OneRestHandler module}.
 * @property RestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.RestHandler|RestHandler module}.
 * @property SingletonRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.SingletonRestHandler|SingletonRestHandler module}.
 * @property UpdateRestHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest.UpdateRestHandler|UpdateRestHandler module}.
 */

"use strict";

module.exports = {
    get CreateRestHandler() { return require('./create_rest_handler'); },
    get DestroyRestHandler() { return require('./destroy_rest_handler'); },
    get ListRestHandler() { return require('./list_rest_handler'); },
    get OneRestHandler() { return require('./one_rest_handler'); },
    get RestHandler() { return require('./rest_handler'); },
    get SingletonRestHandler() { return require('./singleton_rest_handler'); },
    get UpdateRestHandler() { return require('./update_rest_handler'); }
};