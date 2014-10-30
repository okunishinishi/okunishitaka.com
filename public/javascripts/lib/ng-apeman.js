/**
 * @file Apeman module for angular.js
 * @namespace ng-apeman
 * @version 0.0.17
 * @requires angular
 */

(function(ng){
    "use strict";
    /** @lends angular-apeman */
	if (typeof(ng) === 'undefined') {
	    ng = angular;
	}
	var ap = ng.module('apeman', []);
    ap.service('apLocaleService',
	    /**
	     * @memberof ng-apeman
	     * @name apLocaleService
	     */
	        function () {
	        var s = this;
	        /**
	         * Locale data.
	         * @type {object}
	         * @private
	         */
	        s._locales = {};
	
	        /**
	         * Register locale data.
	         * @param {string} lang - Lang of the locales.
	         * @param {object} data - Locale data.
	         */
	        s.register = function (lang, data) {
	            s._locales[lang] = data;
	        };
	
	        /**
	         * Local data for a lang.
	         * @param {string} lang
	         * @returns {object} - Locale data.
	         */
	        s.localeForLang = function (lang) {
	            var locales = s._locales,
	                isValidLang = locales.hasOwnProperty(lang);
	            if (!isValidLang) {
	                throw new Error('Unknown lang: ' + lang);
	            }
	            return locales[lang];
	        };
	    }
	);
    ap.service('apTemplateService',
	    /**
	     * @memberof ng-apeman
	     * @name apTemplateService
	     * @param $templateCache
	     */
	        function ($templateCache) {
	        var s = this;
	
	        /**
	         * Register a template.
	         * @param {string} name - Template name.
	         * @param {string} content - Template content.
	         */
	        s.register = function (name, content) {
	            var isObj = typeof(arguments[0]) === 'object';
	            if (isObj) {
	                var data = arguments[0];
	                Object.keys(data).forEach(function (key) {
	                    s.register(key, data[key]);
	                });
	            }
	            $templateCache.put(name, content);
	        };
	    }
	);

})(angular);