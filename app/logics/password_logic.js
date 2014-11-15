/**
 * Logic for password.
 */

"use strict";

var u = require('apeman-util'),
    uuid = u.ext.uuid,
    crypto = u.core.crypto;

exports._iterations = 1000;
exports._keyLength = 24;//bytes

/**
 * Create password hash.
 * @param {string} password
 * @param {string} salt
 * @returns {stirng} - Hash.
 */
exports.hash = function (password, salt) {
    var hashed = crypto.pbkdf2Sync(
        password,
        salt,
        exports._iterations,
        exports._keyLength);
    return Buffer(hashed, 'binary').toString('hex');

}

/**
 * Create new salt.
 * @returns {stirng} - Salt string.
 */
exports.newSalt = function () {
    return uuid.v4().replace(/\-/g, '');
};