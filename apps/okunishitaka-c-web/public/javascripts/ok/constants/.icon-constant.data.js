/**
 * Data for icon constant.
 */

"use strict";

function ion(name) {
    return [
        'ion',
        ['ion', name].join('-')
    ].join(' ')
}

module.exports = {
    ACCOUNT: ion('ios-contact-outline'),
    CLOSE: ion('close'),
    DOWN: ion('chevron-down'),
    LEFT: ion('chevron-left'),
    PLUS: ion('plus'),
    RIGHT: ion('chevron-right'),
    SIGNIN: ion('log-in'),
    SIGNOUT: ion('log-out')
};
