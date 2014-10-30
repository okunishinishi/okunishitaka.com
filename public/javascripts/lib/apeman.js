/**
 * @file Apeman client side scripts.
 * @namespace apeman
 * @version 0.0.17
 */
window.apeman = (function (apeman) {
    "use strict";
    /** @lends apeman */
	var ap = apeman || {};
    /**
	 * Copy an object.
	 * @function copy
	 * @param {object} src - Object to copy from.
	 * @param {object} dest - Object to copy to.
	 * @returns {object} - Destination object.
	 */
	ap.copy = function copy(src, dest) {
	    var keys = Object.keys(src);
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        dest[key] = src[key];
	    }
	    return dest;
	}
    /**
	 * Do nothing.
	 * @function doNothing
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
