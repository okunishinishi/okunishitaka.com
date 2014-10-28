/**
 * English locale data.
 * @memberof module:okunishitaka-dot-com/app/locales
 * @member en
 * @property {object} pageNames - Page names.
 * @property {object} button - Button texts.
 * @property {object} errors - Error title texts.
 * @property {object} errorDescriptions - Error detail texts.
 */

"use strict";

var pkg = require('../../package');

var l = {};

l.meta = {
    NAME: pkg.name,
    DESCRIPTION: pkg.description,
    AUTHOR: pkg.author
};

l.placeholders = {
    blog: {
        TITLE: 'Title',
        CONTENT: 'Content '
    }
};

l.labels = {
    blogstatus: {
        PUBLIC: 'public',
        PRIVATE: 'private'
    }
};

l.pageNames = {
    INDEX: 'Top',
    PROFILE: 'Profile',
    BLOG: 'Blog',
    WORK: 'Works'
}

l.buttons = {
    MORE: 'See more',
    CANCEL: 'Cancel',
    SAVE: 'Save',
    CLOSE: 'Close',
    DETAIL: 'See more detail'
}

l.errors = {
    CONFLICT_ERROR: 'Conflict occured.',
    CONNECTION_ERROR: 'Connection error occured.',
    NOT_FOUND_ERROR: 'Resource not found.',
    SERVER_ERROR: 'Server error occured.',
    UNEXPECTED_ERROR: 'Unexpected error occured.',
    VALIDATION_ERROR: 'Invalid input.',
};

l.errorDescriptions = {
    CONFLICT_ERROR: 'It seems that someone else update the resource first. \nPlease reload the page and try again.',
    CONNECTION_ERROR: 'Ensure you are connected to the Internet and please try again.',
    NOT_FOUND_ERROR: 'Sorry! The requested resource is not availabe anymore.',
    SERVER_ERROR: 'Something wrong within our server. Plase try again later.',
    UNEXPECTED_ERROR: 'Something seems to be wrong.',
    VALIDATION_ERROR: ''
};

l.pages = {
    index: {
        TITLE: pkg.name
    },
    profile: {
        NAME: 'name',
        captions: {
            PERSONEL: "Personel",
            EDUCATION: "Eductation",
            JOB_HISTORY: "Job History",
            QUALIFICATION: "保有資格"
        }
    },
    blog: {
        PREVIEW_LEGEND: 'Preview'
    }
}

module.exports = Object.seal(l);