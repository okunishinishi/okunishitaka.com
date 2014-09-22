/**
 * @file Apeman client side scripts.
 * @namespace apeman
 * @version 0.0.8
 */
window.apeman = (function (apeman) {
    "use strict";
    /** @lends apeman */
	var ap = apeman || {};
    /**
	 * Do nothing.
	 */
	ap.doNothing = function () {
	
	};
	
    /**
	 * Parse a url.
	 * @param urlString
	 * @returns {object} - Parsed url.
	 */
	ap.parseURL = function (urlString) {
	    var a = document.createElement('a');
	    a.href = urlString || '';
	    return {
	        protocol: a.protocol, // => "http:"
	        hostname: a.hostname, // => "example.com"
	        port: a.port,     // => "3000"
	        pathname: a.pathname, // => "/pathname/"
	        search: a.search,   // => "?search=test"
	        hash: a.hash,     // => "#hash"
	        host: a.host     // => "example.com:3000"
	    }
	
	}

    return apeman;
})(window.apeman = window.apeman || {});
