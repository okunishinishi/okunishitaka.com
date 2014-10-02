/**
 * Test for url utility.
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('urlutil', function () {

    beforeEach(mock.module('ok.utils'));


    it('Inject a util', inject(function (urlUtil) {
        expect(urlUtil).toBeDefined();
    }));

    it('Get base url.', inject(function (urlUtil) {
        var baseURL = urlUtil.baseUrlWithLocation(location);
        expect(baseURL).toBeDefined();
    }));

    it('Join path names.', inject(function (urlUtil) {
        var joined0 = urlUtil.joinUrl('http://example.com', 'foo', 'bar');
        expect(joined0).toEqual('http://example.com/foo/bar');
    }));

});