/**
 * Test for blogRender
 * Runs with karma.
 */

"use strict";


var ng = angular,
    mock = ng.mock;

describe('blogRenderService', function () {

    beforeEach(mock.module('ok.services'));
    it('Inject a service.', inject(function (blogRenderService) {
        expect(blogRenderService).toBeDefined();
    }));
    it('Render a blog.', inject(function (blogRenderService) {
        var rendered = blogRenderService.renderBlog({
            title: 'foo',
            content: '## bar'
        });
        expect(rendered).toBeDefined();
        expect(rendered.title).toEqual('foo');
        expect(rendered.html).toEqual('<h2 id="bar">bar</h2>\n');
    }));
});