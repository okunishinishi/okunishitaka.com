/**
 * @ngdoc object
 * @name toastHtmlTemplate
 * @description Template for toastHtml
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.templates')
        .value('toastHtmlTemplate', {
		    "name": "/html/partials/toast.html",
		    "content": "<div class=\"toast-container\">\n    <div class=\"container\">\n        <div class=\"toast error-toast\" ok:toast ok:toast-messages=\"toasts.error\" ok:icon=\"'exclamation-circle'\"></div>\n        <div class=\"toast warn-toast\" ok:toast ok:toast-messages=\"toasts.warn\" ok:icon=\"'warning'\"></div>\n        <div class=\"toast info-toast\" ok:toast ok:toast-messages=\"toasts.info\" ok:icon=\"'check-circle'\"></div>\n    </div>\n\n\n</div>"
		});

})(angular);