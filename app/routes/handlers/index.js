/**
 * @file App handlers
 * @module okunishitaka-dot-com/app/routes/handlers
 *
 * @property rest {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/rest|rest module}.
 * @property SchemaHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers.SchemaHandler|SchemaHandler module}.
 * @property StorageHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers.StorageHandler|StorageHandler module}.
 */

"use strict";

module.exports = {
    get rest() { return require('./rest'); },
    get SchemaHandler() { return require('./schema_handler'); },
    get StorageHandler() { return require('./storage_handler'); }
};