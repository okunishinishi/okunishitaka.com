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
    reducing = u.reducing,
    path = u.core.path;

var publicDir = path.resolve(__dirname, '../../../public'),
    fontsDir = path.resolve(publicDir, 'fonts');

function valueStyle(key, values, suffix) {
    return values.map(function (value) {
        return {
            selector: '.' + [key, value].join('-'),
            get values() {
                var values = {};
                values[key] = value;
                if (suffix) {
                    values[key] = values[key] + suffix;
                }
                return values;
            }
        }
    });
}

module.exports = {
    get border() {
        return [
            'border',
            'border-top',
            'border-left',
            'border-right',
            'border-bottom'
        ]
            .map(function (style) {
                return [
                    valueStyle(style + '-width', [1, 2], 'px'),
                    valueStyle(style + '-style', ['solid'])
                ].reduce(reducing.concatReduce(), [])
            })
            .reduce(reducing.concatReduce(), [])
    },
    get clear() {
        return valueStyle('clear', [
            'left', 'both', 'right'
        ]);
    },
    get color() {
        var colors = {
            'white': '#FFF',
            'light-white': '#FCFCFC',
            'dark-white': '#F8F8F8',
            'black': '#222',
            'gray': '#AAA',
            'light-gray': '#BBB',
            'silver': '#DDD',
            'light-silver': '#EEE'
        };

        function colorStyle(name, key, value) {
            return {
                selector: '.' + [name, key].join('-'),
                get values() {
                    var values = {};
                    values[key] = value;
                    return values;
                }
            }
        }

        return Object.keys(colors)
            .map(function (name) {
                var val = colors[name];
                return [
                    colorStyle(name, 'color', val),
                    colorStyle(name, 'background-color', val),
                    colorStyle(name, 'border-color', val)
                ].concat(
                    ['top', 'right', 'bottom', 'left'].map(function (dirction) {
                        var key = ['border', dirction, 'color'].join('-');
                        return colorStyle(name, key, val);
                    })
                )
            })
            .reduce(reducing.concatReduce(), []);
    },
    get display() {
        return valueStyle('display', [
            'block', 'inline-block', 'inline', 'flex'

        ]);
    },
    get float() {
        return valueStyle('float', [
            'left', 'none', 'right'
        ]);
    },
    get fontFaces() {
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

        return fonts.map(function (font) {
            return {
                selector: '@font-face',
                values: {
                    'font-family': font.family,
                    'src': format("url('%s')", font.url)
                }
            }
        });
    },
    get fontSizes() {
        return valueStyle('font-size', [8, 10, 12, 16, 18, 24, 32, 48], 'px')
    },
    get margin() {
        return [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left'
        ]
            .map(function (key) {
                return valueStyle(key, [0, 2, 4, 8, 16], 'px')
            })
            .reduce(reducing.concatReduce(), [])
    },
    get padding() {
        return [
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left'
        ]
            .map(function (key) {
                return valueStyle(key, [0, 2, 4, 8, 16], 'px')
            })
            .reduce(reducing.concatReduce(), [])
    },
    get position() {
        return valueStyle('position', [
            'static', 'relative', 'absolute', 'fixed'
        ]);
    },
    get stick() {
        return 'top,right,bottom,left'.split(',').map(function (d) {
                return {
                    selector: '.' + ['stick', d].join('-'),
                    get values() {
                        var values = {};
                        values['position'] = 'absolute';
                        values[d] = '0';
                        return values;
                    }
                }
            }
        )
    },
    get textAlign() {
        return valueStyle('text-align', [
            'left', 'center', 'right'
        ]);
    },
    get textDecoration() {
        return valueStyle('text-decoration', [
            'none', 'underline', 'overline'
        ]);
    },
    get width() {
        return valueStyle('width', [40, 80, 120, 160, 200], 'px')
    },
    get wide() {
        return [
            'article',
            'button',
            'input',
            'label',
            'section',
            'textarea',
            'table'

        ]
            .map(function (name) {
                return {
                    selector: format('.wide-%s', name),
                    values: {
                        width: '100%',
                        'box-sizing': 'border-box',
                        'margin': '0 auto'
                    }
                }
            });
    },
    get zIndex() {
        return valueStyle('z-index', [-1, 0, 2, 4, 8, 16, 32, 64, 128, 256]);
    }

};

