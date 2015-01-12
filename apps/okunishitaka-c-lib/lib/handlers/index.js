/**
 * @file Route handlers.
 * @module okunishitaka-c-lib/lib/handlers
 */

"use strict";

module.exports = {
    get rest() { return require('./rest'); },
    get SchemaHandler() { return require('./schema_handler'); },
    get StorageHandler() { return require('./storage_handler'); },
    get UniqueHandler() { return require('./unique_handler'); }
};