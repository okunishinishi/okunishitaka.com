/**
 * Status codes.
 * @memberof okunishitaka.com/app/codes
 * @member httpStatus
 */

"use strict";


module.exports = Object.seal(
    /** @lends httpStatus */
    {
        OK: 200,
        NOT_FOUND_ERROR: 404,
        CONFLICT_ERROR: 409,
        VALIDATION_ERROR: 422,
        SERVER_ERROR: 503
    }
);
