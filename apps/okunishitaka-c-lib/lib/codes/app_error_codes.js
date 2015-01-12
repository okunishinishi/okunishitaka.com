/**
 * App error codes
 * @memberof okunishitaka-c/lib/codes
 * @member appErrorCodes
 * @property {number} CONFLICT_ERROR - Resource conflict error.
 * @property {number} CONNECTION_ERROR - Network connection error.
 * @property {number} NOT_FOUND_ERROR - Not found error.
 * @property {number} SERVER_ERROR - Internal server error.
 * @property {number} UNEXPECTED_ERROR - Unexpected error.
 * @property {number} VALIDATION_ERROR - Schema validation error.
 */

"use strict";

module.exports = Object.seal(
    {
        CONFLICT_ERROR: 0,
        CONNECTION_ERROR: 1,
        NOT_FOUND_ERROR: 2,
        SERVER_ERROR: 3,
        UNEXPECTED_ERROR: 4,
        VALIDATION_ERROR: 5
    }
);
