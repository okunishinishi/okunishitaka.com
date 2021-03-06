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

var pkg = require('../../package'),
    u = require('apeman-util'),
    format = u.core.util.format;

var l = {};

l.meta = {
    NAME: pkg.name,
    DESCRIPTION: pkg.description,
    AUTHOR: pkg.author,
    COPY_RIGHT: require('./_copy_right')
};

l.placeholders = {
    blog: {
        TITLE: 'Title',
        CONTENT: 'Content ',
        TAGS: 'Tags (comma-separated)'
    }
};

l.labels = {
    blogstatus: {
        PUBLIC: 'public',
        PRIVATE: 'private'
    },
    footer: {
        LINKS: 'Links'
    }
};

l.pageNames = {
    INDEX: 'Top',
    PROFILE: 'Profile',
    BLOG: 'Blog',
    WORK: 'Works'
};

l.pageDescriptions = {
    INDEX: 'Top page.',
    PROFILE: 'Who am I?',
    BLOG: 'What I think?',
    WORK: "What I've made."
};

l.buttons = {
    NEW: 'Create new',
    MORE: 'See more',
    EDIT: 'Edit',
    DELETE: 'Delete',
    CANCEL: 'Cancel',
    SAVE: 'Save',
    CLOSE: 'Close',
    DETAIL: 'See more detail',
    TRY_DEMO: 'Try demo',
    VIEW_SOURCE_CODE: 'View the source code',
    VISIT_SITE: 'Visit the site'
};

l.errors = {
    CONFLICT_ERROR: 'Conflict occurred.',
    CONNECTION_ERROR: 'Connection error occurred.',
    NOT_FOUND_ERROR: 'Resource not found.',
    SERVER_ERROR: 'Server error occurred.',
    UNEXPECTED_ERROR: 'Unexpected error occurred.',
    VALIDATION_ERROR: 'Invalid input.'
};

l.errorDescriptions = {
    CONFLICT_ERROR: 'It seems that someone else update the resource first. \nPlease reload the page and try again.',
    CONNECTION_ERROR: 'Ensure you are connected to the Internet and please try again.',
    NOT_FOUND_ERROR: 'Sorry! The requested resource is not available anymore.',
    SERVER_ERROR: 'Something wrong within our server. Please try again later.',
    UNEXPECTED_ERROR: 'Something seems to be wrong.',
    VALIDATION_ERROR: ''
};

l.pages = {
    index: {
        CAPTION: [
            'Homepage of ' + pkg.author
        ],
        TITLE: pkg.name
    },
    profile: {
        NAME: 'name',
        captions: {
            ABOUT: 'About',
            DREAM: 'Dream',
            BASICS: "Basics",
            EDUCATION: "Education",
            JOB_HISTORY: "Job History",
            QUALIFICATION: "Qualification"
        }
    },
    blog: {
        PREVIEW_LEGEND: 'Preview'
    },
    work: {
        DESCRIPTION: 'Personal works.'
    },
    admin: {
        LOGO: ["admin", l.meta.NAME].join('.'),
        ASK_SURE: 'Are you sure?',
        SAVE_BLOG_DONE: 'The entry has been saved.',
        DESTROY_BLOG_DONE: 'The entry has been deleted.'
    }
}

module.exports = Object.seal(l);