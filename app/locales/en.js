/**
 * @file English locale data.
 */

"use strict";


var l = {};
l.meta = require('./_meta');

l.pageNames = {
    index: 'Top',
    blog: 'Blog',
    work: 'Works'
}

l.buttons = {
    more: 'See more',
    cancel: 'Cancel',
    save: 'Save'
}

l.errors = {
    ConflictError: 'Conflict occured.',
    ConnectionError: 'Connection error occured.',
    NotfoundError: 'Resource not found.',
    ServerError: 'Server error occured.',
    UnexpectedError: 'Unexpected error occured.',
    ValidationError: 'Invalid input.',
};

l.errorDescription = {
    ConflictError: 'It seems that someone else update the resource first. \nPlease reload the page and try again.',
    ConnectionError: 'Ensure you are connected to the Internet and please try again.',
    NotfoundError: 'Sorry! The requested resource is not availabe anymore.',
    ServiceError: 'Something wrong within our server. Plase try again later.',
    UnexpectedError: 'Something seems to be wrong.',
    ValidationError: ''
};

module.exports = l;