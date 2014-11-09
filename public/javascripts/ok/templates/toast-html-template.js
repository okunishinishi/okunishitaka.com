/**
 * Template for toastHtml
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('toastHtmlTemplate', {
		    "name": "/html/partials/toast.html",
		    "content": "<div class=\"toast-container container\">\n    <div class=\"toast error-toast\" ok:toast ok:toast-messages=\"toasts.error\"></div>\n    <div class=\"toast warn-toast\" ok:toast ok:toast-messages=\"toasts.warn\"></div>\n    <div class=\"toast info-toast\" ok:toast ok:toast-messages=\"toasts.info\"></div>\n</div>"
		});

})(angular);