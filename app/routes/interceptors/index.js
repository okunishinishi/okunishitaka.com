/**
 * @file App interceptor
 * @module okunishitaka-dot-com/app/routes/interceptors
 *
 * @property SchemaInterceptor {object} - {@link module:okunishitaka-dot-com/app/routes/interceptors.SchemaInterceptor|SchemaInterceptor module}.
 * @property StorageInterceptor {object} - {@link module:okunishitaka-dot-com/app/routes/interceptors.StorageInterceptor|StorageInterceptor module}.

 */

"use strict";

module.exports = {
    
    get SchemaInterceptor() { return require('./schema_interceptor'); },

    get StorageInterceptor() { return require('./storage_interceptor'); }
};