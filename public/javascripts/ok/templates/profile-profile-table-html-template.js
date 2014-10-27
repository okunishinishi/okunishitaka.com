/**
 * Template for profileProfileTableHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('profileProfileTableHtmlTemplate', {
		    "name": "/html/partials/profile/profile-table.html",
		    "content": "<table id=\"{{id}}\" class=\"prfile-table\">\n    <caption>{{caption}}</caption>\n    <tbody>\n    <tr ng-repeat=\"(key, val) in data\">\n        <th>{{key}}</th>\n        <td>{{val}}</td>\n    </tr>\n    </tbody>\n</table>"
		});

})(angular);