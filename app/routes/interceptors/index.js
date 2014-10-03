/**
 * @file App interceptor
 * @module okunishitaka-dot-com/app/routes/interceptors */

"use strict";

module.exports = {
    get SchemaInterceptor() { return require('./schema_interceptor'); },    get StorageInterceptor() { return require('./storage_interceptor'); }
};