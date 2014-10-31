/**
 * Data file for css.
 * @type {exports}
 */

"use strict";

var u = require('apeman-util'),
    format = u.core.util.format,
    string = u.string,
    fs = u.core.fs,
    filtering = u.filtering,
    path = u.core.path;

var publicDir = path.resolve(__dirname, '../../../public'),
    fontsDir = path.resolve(publicDir, 'fonts');

function valueStyle(key, values) {
    return values.map(function (value) {
        return {
            selector: '.' + [key, value].join('-'),
            get values() {
                var values = {};
                values[key] = value;
                return values;
            }
        }
    });
};

exports.textAlign = valueStyle('text-align', [
    'left', 'center', 'right'
]);
exports.float = valueStyle('float', [
    'left', 'none', 'right'
]);
exports.clear = valueStyle('clear', [
    'left', 'both', 'right'
]);
exports.position = valueStyle('position', [
    'static', 'relative', 'absolute', 'fixed'
]);

var fonts = fs.readdirSync(fontsDir)
    .filter(filtering.patternAcceptFilter(/\.woff$/))
    .map(function (filename) {
        var name = path.basename(filename, path.extname(filename));
        return {
            name: name,
            family: string.paramString(name),
            url: '/' + path.relative(publicDir, path.resolve(fontsDir, filename))
        }
    });

/**
 * Data for font-faces.css
 * @type {{}}
 */
exports.fontFaces = fonts.map(function (font) {
    return {
        selector: '@font-face',
        values: {
            'font-family': font.family,
            'src': format("url('%s')", font.url)
        }
    }
});