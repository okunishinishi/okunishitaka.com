/**
 * @file App handlers
 * @module okunishitaka-dot-com/app/routes/handlers
 *
 * @property schemaHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/schemaHandler|schemaHandler module}.
 * @property storageHandler {object} - {@link module:okunishitaka-dot-com/app/routes/handlers/storageHandler|storageHandler module}.
 */

"use strict";

module.exports = {
    get schemaHandler() { return require('./schema_handler'); },
    get storageHandler() { return require('./storage_handler'); }
};