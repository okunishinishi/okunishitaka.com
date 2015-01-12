/**
 * Data for view constant.
 */

"use strict";

var u = require('apeman-util'),
    reducing = u.reducing,
    string = u.string;

var views = require('../../../.views.json');

function viewData(views) {

    var data = {};
    Object.keys(views).map(function (pageName) {
        return views[pageName].map(function (view) {
            data[view] = 'partialUrlConstant.' + [
                pageName
            ]
                .concat(view.split(/\./g))
                .concat(['VIEW']).join('_')
                .toUpperCase();
        }).reduce(reducing.concatReduce(), []);
    });
    return data;
}


module.exports = viewData(views);