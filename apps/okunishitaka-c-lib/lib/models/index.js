/**
 * @file Models
 * @module okunishitaka-c-lib/lib/models
 */

"use strict";

module.exports = {
    get blogModel() { return require('./blog_model'); },
    get blogTagModel() { return require('./blog_tag_model'); },
    get scoreModel() { return require('./score_model'); },
    get sessionModel() { return require('./session_model'); }
};